const {
    updateUser,deleteUser,getAllUser,getDetailUser
  }=require('../controllers/user.js');
  const { verifyAdmin,verifyUser } = require("../middleware/verify.js");

  const router=require('express').Router;

  router.get("/getAllUser",verifyAdmin, getAllUser);
  router.get("/getDetailUser/:id", verifyUser,getDetailUser);
  router.delete("/deleteUser/:id", verifyUser,deleteUser);
  router.put("/updateUser/:id", verifyUser,updateUser);


  module.exports=router