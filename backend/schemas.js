const mongoose = require("mongoose");

const Review = mongoose.model("review", new mongoose.Schema({
    name: String,
    description: String,
    stars: Number,
    dateUploaded: {
        type: Date,
        default: Date.now(),
        required: true
    }
}));

module.exports = {
    Review
}