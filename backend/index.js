'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const Joi = require('joi');
const { Review } = require('./schemas.js');
require('dotenv').config();

const init = async () => {

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGOURI);
    console.log('Connected to MongoDB');

    const server = Hapi.server({
        port: 3001,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
                headers: ["Accept", "Content-Type"],
                additionalHeaders: ["X-Requested-With"],
                credentials: true
            }
        }
    });

    // GET route to fetch all reviews
    server.route({
        method: 'GET',
        path: '/api/data',
        handler: async (request, h) => {
            try {
                const reviews = await Review.find();
                return h.response(reviews).code(200);
            } catch (error) {
                console.log(error);
                return h.response({ message: 'Internal Server Error' }).code(500);
            }
        },
    });

    // POST route to create a new review
    const postSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        stars: Joi.number().min(1).max(5).required()
    });

    server.route({
        method: 'POST',
        path: '/api/upload',
        options: {
            validate: {
                payload: postSchema,
                failAction: (request, h, error) => {
                    return h.response({
                        message: 'Bad Request',
                        error: error.details.map(detail => detail.message).join(', ')
                    }).code(400).takeover();
                }
            }
        },
        handler: async (request, h) => {
            try {
                const newItem = request.payload;
                const result = new Review(newItem);
                await result.save();
                return h.response(result).code(201);
            } catch (error) {
                console.log(error);
                return h.response({ message: 'Internal Server Error' }).code(500);
            }
        },
    });

    // PUT route to update an existing review
    const idSchema = Joi.object({
        id: Joi.string().required()
    });

    server.route({
        method: 'PUT',
        path: '/api/upload/{id}',
        options: {
            validate: {
                params: idSchema,
                payload: postSchema,
                failAction: (request, h, error) => {
                    return h.response({
                        message: 'Bad Request',
                        error: error.details.map(detail => detail.message).join(', ')
                    }).code(400).takeover();
                }
            }
        },
        handler: async (request, h) => {
            try {
                const itemId = request.params.id;
                const updatedData = request.payload;

                const findReview = await Review.findByIdAndUpdate(itemId, updatedData, {
                    new: true,
                    runValidators: true
                });
                if (!findReview) return h.response({ message: "Review not found" }).code(404);

                return h.response(findReview).code(200);

            } catch (error) {
                console.log(error);
                return h.response({ message: 'Internal Server Error' }).code(500);
            }
        },
    });

    // DELETE route to delete a review by ID
    server.route({
        method: 'DELETE',
        path: '/api/upload/{id}',
        options: {
            validate: {
                params: idSchema,
                failAction: (request, h, error) => {
                    return h.response({
                        message: 'Bad Request',
                        error: error.details.map(detail => detail.message).join(', ')
                    }).code(400).takeover();
                }
            }
        },
        handler: async (request, h) => {
            try {
                const itemId = request.params.id;

                // Delete the review by ID
                const deletedReview = await Review.findByIdAndDelete(itemId);

                if (!deletedReview) return h.response({ message: 'Review not found' }).code(404);

                // Successfully deleted
                return h.response({ message: 'Review deleted successfully' }).code(200);

            } catch (error) {
                console.log(error);
                return h.response({ message: 'Internal Server Error' }).code(500);
            }
        },
    });

    // Start the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
