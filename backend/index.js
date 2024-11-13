'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const Joi = require('joi');
const { Review } = require('./schemas.js');


const init = async () => {

    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['http://localhost:3000'],
                headers: ["Accept", "Content-Type"],
                additionalHeaders: ["X-Requested-With"],
                credentials: true
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/api/data',
        handler: async (request, h) => {
            try {
                return await Review.find();
            } catch (error) {
                console.log(`Error retrieving data: ${error.message}`);
            }
        },
    });

    const postSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        stars: Joi.number().min(1).max(5).required()
    })

    server.route({
        method: 'POST',
        path: '/api/upload',
        options: {
            validate: {
                payload: postSchema,
                failAction: (request, h, error) => {
                    throw new ValidationError(error.details);
                }
            }
        },
        handler: async (request, h) => {
            try {
                const newItem = request.payload;
                const result = new Review(newItem);
                await result.save();
                return result;
            } catch (error) {
                throw new Error(`Error retrieving data: ${error.message}`);
            }
        },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();