import CallLog from "../models/CallLog.js";

export const uploadCalls = async (req, res) => {
    try {
        const calls = req.body;

        await CallLog.insertMany(calls);

        res.status(200).json({ message: "Calls saved successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};