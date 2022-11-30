import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import todoRoute from "./Routers/todoRoute.js";

import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/todo", todoRoute)

app.listen(5000, () => {
  // connect to database
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db in 5000"))
    .catch((error) => console.log(error));
});


