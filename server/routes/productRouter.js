const express = require("express");
const { createProduct, getAllProducts, getProductById, getUpdateById, deleteProductById } = require("../controllers/productController");
const router = express.Router();

//get
router.get("/", getAllProducts);

//getById
router.get("/:id", getProductById);

//post
router.post("/post", createProduct);

//update
router.put("/update/:id", getUpdateById);

//delete
router.delete("/delete/:id", deleteProductById);

module.exports = router;