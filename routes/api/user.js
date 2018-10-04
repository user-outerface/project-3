const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.signup);

router.route("/login")
    .post(userController.login);

router.route("/creds")
    .get(userController.credGiver);

router.route("/out")
    .get(userController.logout);

module.exports = router;