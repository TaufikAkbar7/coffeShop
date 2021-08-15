const { Product } = require("../models/productModel");
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
    const image = req.file.path;
    const harga = req.body.harga;
    const detail = req.body.detail;
    const category = req.body.category;

    const product = new Product({
        name: name,
        image: image,
        harga: harga,
        detail: detail,
        category: category,
    });

    const createProduct = await product.save();
    res.status(201).json({ message: "Create product success", createProduct })
});

exports.getAllProducts = asyncHandler(async (req, res) => {
    const currentPage = +req.query.page || 1;
    const perPage = +req.query.perPage || 4;
    const name = req.query.name || "";
    const category = req.query.category || "";
    const order = req.query.order || "";
    const min =
        req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
        req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const categoryFilter = category ? { category: category } : {};
    const priceFilter = min && max ? { harga: { $gte: min, $lte: max } } : {};
    const sortOrder =
        order === "lowest"
            ? { harga: 1, createdAt: -1 }
            : order === "highest"
                ? { harga: -1, createdAt: -1 }
                : { _id: -1, createdAt: -1 };

    const count = await Product.countDocuments();
    const products = await Product.find({
        ...nameFilter,
        ...categoryFilter,
        ...priceFilter,
    })
        .sort(sortOrder)
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    res.status(200).json({
        message: "Get Data succesfully",
        total_product: count,
        current_page: currentPage,
        per_page: perPage,
        data: products
    });
});

exports.getProductById = asyncHandler(async (req, res) => {
    //buat variabel untuk get id dari route
    const getId = req.params.id;

    const product = await Product.findById(getId);
    res.status(200).json({ message: "Get Data Success", product });
});

exports.getUpdateById = asyncHandler(async (req, res) => {

    //cek apakah image sudah di upload oleh user
    if (!req.file) {
        const err = new Error("Image must be uploaded!");
        err.errStatus = 422;
        throw err;
    }

    const name = req.body.name;
    const image = req.file.path;
    const harga = req.body.harga;
    const detail = req.body.detail;
    const category = req.body.category;
    const getId = req.params.id;

    const product = await Product.findById(getId);
    if (!product) {
        res.status(404).json({ message: "Product not found!" });
    }
    product.name = name;
    product.image = image;
    product.harga = harga;
    product.detail = detail;
    product.category = category;

    const updateProduct = await product.save();
    res.status(201).json({ message: "Product Updated", updateProduct });
});

exports.deleteProductById = asyncHandler(async (req, res) => {
    const getId = req.params.id;

    const product = await Product.findById(getId);
    if (!product) {
        res.status(404).json({ message: "Product not found!!" });
    }
    //remove image
    removeImage(product.image);

    //remove postingan atau blog
    const productRemove = await Product.findByIdAndRemove(getId);
    res.status(200).json({ message: "Product Deleted", productRemove });
});

const removeImage = (filePath) => {
    console.log(filePath);
    console.log(__dirname);

    ///home/kyousuke/Documents/Front_end_web/React_js/backend_blog/image/1616526926500-Screenshot 2021-02-15 14:36:01.png
    filePath = path.join(__dirname, "../../", filePath);
    fs.unlink(filePath, (error) => console.log(error));
};