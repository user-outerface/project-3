const router = require("express").Router();
const genreRoutes = require("./genre");
const commRoutes = require("./comm");

// Article routes
router.use("/genre", genreRoutes);
router.use("/comm", commRoutes);
// router.use("/post", postRoutes);

module.exports = router;
