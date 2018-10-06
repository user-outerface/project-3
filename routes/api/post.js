//post routing here

const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create)
  .put(postController.update);

router.route("/some/:genSwitch")
  .get(postController.findSome);

router.route("/scrubbed")
  .put(postController.delUpper);

router.route("/one/:id")
  .get(postController.findOne);

module.exports = router;