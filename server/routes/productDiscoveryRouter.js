const express = require("express");
const { createProductDiscovery, getAllProductDiscovery, getUpdateById, getProductDiscoveryById, deleteProductDiscoveryById } = require("../controllers/productDiscoveryController");
const router = express.Router();

//get
router.get("/", getAllProductDiscovery);

//getById
router.get("/:id", getProductDiscoveryById);

//post
router.post("/post", createProductDiscovery);

//update
router.put("/update/:id", getUpdateById);

//delete
router.delete("/delete/:id", deleteProductDiscoveryById);

module.exports = router;