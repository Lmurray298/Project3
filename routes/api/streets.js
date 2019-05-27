const router = require("express").Router();
const streetsController = require("../../controllers/streetsController");


router.route("/")
  .get(streetsController.findAll);


router
  .route("/:id")
  .get(streetsController.findById);

module.exports = router;
