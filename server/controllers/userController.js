const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.userRegister = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pw = req.body.password;

    const user = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(pw, 8),
    })

    if (!user) {
        res.status(400).json({ message: "Error can not add user" });
    }

    const register = await user.save();
    res.status(201).json({
        message: "Register successfully",
        register
    })
});

exports.userLogin = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const pw = req.body.password;

    const user = await User.findOne({ email });

    if (user) {
        if (bcrypt.compareSync(pw, user.password)) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                userRole: user.userRole
            });
            return;
        }
    }
    res.status(401).json({ message: "Invalid email or password" })
});

exports.getAllUsers = asyncHandler(async (req, res) => {
    const sortByDesc = { createdAt: -1 };
    const count = await User.countDocuments();
    const users = await User.find().sort(sortByDesc);

    res.status(200).json({
        message: "Get all users success",
        users,
        total_user: count
    })
});

exports.updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const pw = req.body.password;
    const userRole = req.body.userRole;

    const user = await User.findById(id);

    if (user) {
        user.name = name;
        user.email = email;
        user.userRole = userRole;
    }
    if (pw) {
        user.password = bcrypt.hashSync(pw, 8);
    }

    const saveUser = await user.save();
    res.status(200).json({ message: "User has been updated", saveUser });
});

exports.getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const getUser = await User.findById(id);
    if (!getUser) {
        res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ 
        message: "Get user success",
        _id: getUser._id,
        name: getUser.name,
        email: getUser.email,
        userRole: getUser.userRole
    });
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const getUser = await User.findById(id);
    if (getUser) {
        if (getUser.userRole === 1) {
            res.status(400).json({ message: "Can Not Delete Admin User" });
            return;
        }
        const deleteUser = await getUser.remove();
        res.status(200).json({ message: "User Deleted",  deleteUser });
    } else {
        res.status(404).json({ message: "User Not Found" });
    }
})