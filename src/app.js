import express from "express";
import cors from "cors";
import callRoutes from "./routes/callRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/calls", callRoutes);

export default app;
