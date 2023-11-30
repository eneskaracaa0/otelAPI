const User = require("../models/User.js");

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Silme işlemi başarılı!",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
  const getDetailUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
};
  const getAllUser = async (req, res, next) => {
    try {
      const user = await User.find();
      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  
  module.exports={
    updateUser,deleteUser,getAllUser,getDetailUser
  }
