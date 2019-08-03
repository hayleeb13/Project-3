const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:name")
  .get(userController.findById)
  .post(userController.create)
  .put(function() {
    console.log("route users hitting")
    userController.update
  })
  .delete(userController.remove);

module.exports = router;