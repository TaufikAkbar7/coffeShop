const express = require("express");
const { getAllUsers, getUserById, userRegister, updateUser, deleteUser, userLogin } = require("../controllers/userController")
const router = express.Router();

//get
router.get("/", getAllUsers);

//getById
router.get("/:id", getUserById);

//post
router.post("/register", userRegister);

//login
router.post("/login", userLogin);

//update
router.put("/update/:id", updateUser);

//delete
router.delete("/delete/:id", deleteUser);

module.exports = router;