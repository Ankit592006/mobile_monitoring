import mongoose from "mongoose";

const callSchema = new mongoose.Schema({
    deviceId: String,
    number: String,
    type: String,
    duration: String,
    timestamp: Date
});

export default mongoose.model("CallLog", callSchema);