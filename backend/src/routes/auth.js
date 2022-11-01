const router = require("express").Router();
const { login, create } = require("../controllers/auth");

router.post("/create", create);

router.post("/login", login);

module.exports = router;
