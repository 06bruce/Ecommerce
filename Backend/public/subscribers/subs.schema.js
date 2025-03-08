const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const subscribes = new mongoose.schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        }
    },
    {
        Timestamp: true,
    }
);

const subscribers = mongoose.model("subscribes", subscribes);
module.export = subscribers;