const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const postRoutes = require("./postController");
router.use("/posts",postRoutes);

module.exports = router;