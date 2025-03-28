import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    user:String,
    text:String,
    timestamp: { type: Date, default: Date.now }
});

const MessageModel = mongoose.model("messages",messageSchema);

export default MessageModel;