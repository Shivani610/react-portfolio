const mongoose = require("mongoose");

module.exports = mongoose.model("contacts", mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    message: {
        type: String,
        required: false
    }
}, { timestamps: true }))