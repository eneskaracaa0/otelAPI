const {
  typeByCity,
  typeByCount,
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotel,
} = require("../controllers/hotel.js");
const {verifyAdmin}=require('../middleware/verify.js');

const router=require('express').Router();


router.get("/typeByCount",typeByCount);
router.get("/typeByCity", typeByCity);
router.post("/createHotel",verifyAdmin, createHotel);
router.put("/updateHotel/:id", verifyAdmin,updateHotel);
router.delete("/deleteHotel/:id", verifyAdmin,deleteHotel);
router.get("/getSingleHotel/:id", getSingleHotel);
router.get("/getAllHotel", getAllHotel);




module.exports=router