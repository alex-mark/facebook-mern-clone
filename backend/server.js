import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import path from "path";
import Pusher from "pusher";

Grid.mongo = mongoose.mongo;

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

// db config
const dbPassword = process.env.MONGO_USER_PW || "";
const dbName = "facebook_db";
const mongoURI = `mongodb+srv://admin:${dbPassword}@cluster0.leusp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const conn = mongoose.createConnection(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log("main: DB Connected"));

conn.once("open", () => console.log("conn: DB Connected"));

// api routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
