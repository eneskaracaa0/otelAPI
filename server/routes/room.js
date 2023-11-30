const {  getAllRoom,getDetailRoom,createRoom,updateRoom,deleteRoom
}=require('../controllers/room.js');
const { verifyAdmin } = require("../middleware/verify.js");

const router=require('express').Router;


router.get('/getAllRoom',getAllRoom);
router.get("/getDetailRoom/:id", getDetailRoom);
router.get("/getDetailRoom/:id", verifyAdmin,updateRoom);
router.post("createRoom/:id/:hotelid", verifyAdmin,createRoom);
router.put("/updateRoom/:id", verifyAdmin,updateRoom);
router.delete("/deleteRoom/:id/:hotelid", verifyAdmin,deleteRoom);


module.exports=router;