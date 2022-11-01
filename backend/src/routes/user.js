const {
  getuser,
  placebid,
  makepayment,
  heldup,
  updateUser,
} = require("../controllers/user");
const router = require("express").Router();

router.get("/getuser/:id", getuser);

router.post("/placebid", placebid);

router.post("/pay", makepayment);

router.post("/heldup/:id", heldup);

router.put("/update/:id", updateUser);

module.exports = router;
