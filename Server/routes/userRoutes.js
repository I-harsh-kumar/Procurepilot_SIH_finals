const express = require('express');
const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
const { isAuth, isAdmin, generateToken} = require('../utils.js');

const userRouter = express.Router();

//new user
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);
//existing user
userRouter.get(
  '/getuserinfo',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log('Reached username endpoint');

    const user = await User.findById(req.user._id);
    if (user) {
      console.log(user.name);
      res.send({ name: user.name });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

module.exports=userRouter;

