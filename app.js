import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
