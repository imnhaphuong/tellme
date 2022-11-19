const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const User = require("../models/user");

//get all users
router.get("/", userController.getAllUsers);
router.post("/create", userController.createUser);

module.exports = router;
