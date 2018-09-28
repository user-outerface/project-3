//post routing here

const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/genre/:id"
// router
//   .route("/:id")
//   .get(postController.findById)
//   .put(postController.update)
//   .delete(postController.remove);

module.exports = router;