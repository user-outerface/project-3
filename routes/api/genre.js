const router = require("express").Router();
const genreController = require("../../controllers/genreController");

// Matches with "/api/genre"
router.route("/")
  .get(genreController.findAll)
  .post(genreController.create);

// Matches with "/api/genre/:id"
router
  .route("/:id")
  .get(genreController.findById)
  .put(genreController.update)
  .delete(genreController.remove);

module.exports = router;
