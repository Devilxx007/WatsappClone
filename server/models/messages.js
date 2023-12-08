import mongoose, { Schema } from "mongoose";

const messageSchema =  mongoose.Schema({
    message: {
        type: String,
    },
    name: {
        type: String,
    },
    timestamp: {
        type: String,
    },
    received: {
        type: Boolean,
    }
})

export default mongoose.model('messageContent',messageSchema)