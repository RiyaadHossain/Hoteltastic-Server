const { emailhandler } = require("../controller/emailController");

const router = require("express").Router();
router.post("/", emailhandler);
module.exports = router;
