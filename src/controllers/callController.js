import CallLog from "../models/CallLog.js";
export const uploadCalls = async (req, res) => {
    try {
        console.log("Incoming Data:", req.body);

        const calls = req.body;

        await CallLog.insertMany(calls);

        res.status(200).json({ message: "Calls saved successfully" });

    } catch (error) {
        console.log("Error saving calls:", error);
        res.status(500).json({ error: error.message });
    }
};