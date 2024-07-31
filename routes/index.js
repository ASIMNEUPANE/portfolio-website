const router = require("express").Router();

const apiRoutes = require("./routes.api");
const uiRoutes = require("./routes.ui");

router.use("/api/v1", apiRoutes);
router.use("/", uiRoutes);

module.exports = router;
