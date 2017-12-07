const router = require("express").Router();
const staffRoutes = require("./staff");

// Staff routes
router.use("/staff", staffRoutes);

module.exports = router;
