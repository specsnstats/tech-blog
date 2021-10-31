const express = require('express');
const router = express.Router();
const frontEndRoutes = require("./frontEndRoutes");

const apiRoutes = require("./api");
router.use("/api",apiRoutes);
router.use(frontEndRoutes);

module.exports = router;