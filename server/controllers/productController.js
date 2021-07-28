const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs");

exports.createProduct = asyncHandler(async (req, res) => {

    if (!req.file) {
        const err = new Error("Image must be uploaded!");
        err.errStatus = 422;
        throw err;
    }

    const name = req.body.name;
    const image = req.file.image;
    const harga = req.body.harga;
    const detail = req.body.detail;

    const product = new Product({
        name: name,
        image: image,
        harga: harga,
        detail: detail
    });

    const createProduct = await product.save();
    res.status(201).json({ message: "Create product success", createProduct })
})