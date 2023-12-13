const express = require('express');
const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const GFR = require('../models/gfrModel.js');
const { isAuth, isAdmin, generateToken} = require('../utils.js');

const gfrRouter = express.Router();

//to get all Rule from GFR dataBase
gfrRouter.get('/getGfrRule', async (req, res) => {
  const rules = await GFR.find();
  res.send(rules);
});
//to add a new rule in GFR dataBase
gfrRouter.post(
    '/addGfrRule',
    expressAsyncHandler(async (req, res) => {
      const newRule = new GFR({
        rule: req.body.rule,
        heading: req.body.heading,
        description: req.body.description,
        category: req.body.category,
      });
      const rule = await newRule.save();
      res.send({ message: 'new Rule Created', rule});
    })
  );

module.exports=gfrRouter;

