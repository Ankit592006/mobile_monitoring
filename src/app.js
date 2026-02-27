import express from "express";
import cors from "cors";
import callRoutes from "./routes/callRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/calls", callRoutes);

export default app;