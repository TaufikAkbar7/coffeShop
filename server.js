const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv/config");

const app = express();

//setting nama image dan lokasi image yang masuk ke DB
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + file.originalname);
    },
});

//filter format image sebelum masuk DB
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//middleware file image
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

//handle get image
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(express.json()); //type JSON

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT, () => console.log(`connect to port ${process.env.PORT}`));
}).catch(error => console.log(error))