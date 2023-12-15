const express = require('express');
const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const GFR = require('../models/gfrModel.js');
const { isAuth, isAdmin, generateToken} = require('../utils.js');

const gfrRouter = express.Router();

gfrRouter.get('/getGfrRule', async (req, res) => {
    try {
      const rules = await GFR.find();
      const formattedRules = rules.map(({ rule, heading, description, category }) => ({
        rule,
        heading,
        description,
        category,
      }));
  
      res.json({ rules: formattedRules });
    } catch (error) {
      console.error('Error fetching GFR rules:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

gfrRouter.post(
    '/addGfrRule',
    expressAsyncHandler(async (req, res) => {
      try {
        const newRule = new GFR({
          rule: req.body.rule,
          heading: req.body.heading,
          description: req.body.description,
          category: req.body.category,
        });
  
        const rule = await newRule.save();
        res.send({ message: 'New Rule Created', rule });
      } catch (error) {
        console.error('Validation Error:', error.message);
        res.status(400).json({ error: 'Validation Error', message: error.message });
      }
    })
  );
  

module.exports=gfrRouter;

