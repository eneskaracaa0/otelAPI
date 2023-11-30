const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.findOne(email);
    if (user) {
      return res.status(500).json({
        message: "Zaten böyle bir kullanıcı kayıtlı!",
      });
    }
    if (password.length < 6)
      res.status(500).json({
        message: "Parolanız min 6 karakter olmalı!",
      });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: passwordHash });

    const token = jwt.sign(
      { id: newUser._id, idAdmin: newUser.isAdmin },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true }).status(201).json({
      token,
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
const login = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne(email);
    if (!user) {
      return res.status(500).json({
        message: "Böyle bir kullanıcı bulunmamakta",
      });
    }

    const passwordCompaire = await bcrypt.compare(password, user.password);
    if (!passwordCompaire) {
      return res.status(500).json({
        message: "Parorolar eşleşemedi!",
      });
    }

   const token=await jwt.sign({id:user_id,idAdmin:user.isAdmin},"SECRET_KEY",{expiresIn:"1h"});
   res.cookie("token",token,{httpOnly:true}).status(200).json({
    token,
    user
   })

   

    
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};


module.exports={register,login}
