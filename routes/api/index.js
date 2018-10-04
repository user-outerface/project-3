const router = require("express").Router();
const genreRoutes = require("./genre");
const commRoutes = require("./comm");
const postRoutes = require("./post");
const userRoutes = require("./user");

// Article routes
router.use("/genre", genreRoutes);
router.use("/comm", commRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
