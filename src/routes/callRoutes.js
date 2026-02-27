import express from "express";
import { uploadCalls } from "../controllers/callController.js";

const router = express.Router();

router.post("/", uploadCalls);

export default router;