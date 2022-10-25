const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");

router.post("/signup", userController.createUser);
router.get("", userController.getAllUsers);

module.exports = router;
