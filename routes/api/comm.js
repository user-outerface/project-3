const router = require("express").Router();
const commController = require("../../controllers/commController");

router.route("/")
    .get(commController.findAll)
    .post(commController.create)
    .put(commController.update);

router.route("/:pId/:cId")
    .delete(commController.removeOne);

// router
//     .route("/:id")
//     .delete(commController.removeOne);

router
    .route("/many-del/:id")
    .delete(commController.removeMany);

module.exports = router;