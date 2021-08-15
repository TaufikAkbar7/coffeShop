const { ProductDiscovery } = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs");

exports.createProductDiscovery = asyncHandler(async (req, res) => {
    if (!req.file) {
        const err = new Error("Image must be uploaded!");
        err.errStatus = 422;
        throw err;
    }

    const name = req.body.name;
    const image = req.file.path;

    const productDiscovery = new ProductDiscovery({
        name: name,
        image: image,
    });

    const createProductDiscovery = await productDiscovery.save();
    res.status(201).json({ message: "Create product discovery success", createProductDiscovery });
});

exports.getAllProductDiscovery = asyncHandler(async (req, res) => {
    const getProductDiscovery = await ProductDiscovery.find();
    res.status(200).json({
        message: "Get data succesfully",
        getProductDiscovery
    }) 
});

exports.getProductDiscoveryById = asyncHandler(async (req, res) => {
    const getId = req.params.id;

    const getProductDiscovery = await ProductDiscovery.findById(getId);
    res.status(200).json({
        message: "Get data success",
        getProductDiscovery
    });
});

exports.getUpdateById = asyncHandler(async (req, res) => {

    //cek apakah image sudah di upload oleh user
    if (!req.file) {
        const err = new Error("Image must be uploaded!");
        err.errStatus = 422;
        throw err;
    };

    const getId = req.params.id;
    const name = req.body.name;
    const image = req.file.path;

    const getProductDiscovery = await ProductDiscovery.findById(getId);
    if(!getProductDiscovery) {
        res.status(404).json({ message: "Product discovery not found!" });
    };
    getProductDiscovery.name = name;
    getProductDiscovery.image = image;

    const updateProductDiscovery = await getProductDiscovery.save();
    res.status(201).json({ message: "Product discovery Updated", updateProductDiscovery });
});

exports.deleteProductDiscoveryById = asyncHandler(async (req, res) => {
    const getId = req.params.id;

    const getProductDiscovery = await ProductDiscovery.findById(getId);
    if (!getProductDiscovery) {
        res.status(404).json({ message: "Product discovery not found!!" });
    }
    //remove image
    removeImage(getProductDiscovery.image);

    //remove postingan atau blog
    const productDiscoveryRemove = await ProductDiscovery.findByIdAndRemove(getId);
    res.status(200).json({ message: "Product discovery deleted", productDiscoveryRemove });
});

const removeImage = (filePath) => {
    console.log(filePath);
    console.log(__dirname);

    ///home/kyousuke/Documents/Front_end_web/React_js/backend_blog/image/1616526926500-Screenshot 2021-02-15 14:36:01.png
    filePath = path.join(__dirname, "../../", filePath);
    fs.unlink(filePath, (error) => console.log(error));
};