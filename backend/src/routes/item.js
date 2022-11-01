const router = require("express").Router();
const {
  createitem,
  getitem,
  reject,
  live,
  getDown,
  acceptBid,
  updateItem,
  findprod,
} = require("../controllers/item");

router.post("/createitem", createitem);

router.get("/getitem/:id", getitem);

router.get("/search/:search_txt", findprod);

router.put("/updateitem/:id", updateItem);

router.post("/down", getDown);

router.post("/accept/:id", acceptBid);

router.post("/reject", reject);

router.post("/live", live);

module.exports = router;
