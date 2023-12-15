const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Approval = require('../models/approvalModel.js');
const { isAuth, isAdmin } = require('../utils.js');

const approvalRouter = express.Router();

approvalRouter.post(
  '/editrule',
  expressAsyncHandler(async (req, res) => {
    try {
      const {
        editBy,
        editAt,
        dataOriginal,
        dataChanged,
        isDelete,
        isEdit,
        approval1,
        approval1Date,
        approval2,
        approval2Date,
        approval3,
        approval3Date,
        isApproval,
      } = req.body;

      // Validate dataChanged presence
      if (!dataChanged) {
        return res.status(400).json({ error: 'Data changed is required' });
      }

      // Add more validations if needed...

      const newApproval = new Approval({
        editBy,
        editAt,
        dataOriginal,
        dataChanged,
        isDelete,
        isEdit,
        approval1,
        approval1Date,
        approval2,
        approval2Date,
        approval3,
        approval3Date,
        isApproval,
      });
      
     const approvalResult = await newApproval.save();

      res.status(201).json(approvalResult);
    } catch (error) {
      console.error('Error submitting approval:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
);
approvalRouter.get('/getapprovaldata', async (req, res) => {
  // console.log('Reached /edit/:id endpoint');

    try {
      const data = await Approval.find();
      res.json({ success: true, data });
    
    } catch (error) {
      console.error('Error fetching GFR rules:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  approvalRouter.get('/compare/:id', async (req, res) => {
    console.log('Reached /edit/:id endpoint');
    try {
      const ruleId = req.params.id;
      const data = await Approval.findOne({ _id: ruleId });
      console.log("suraj");
      if (!data) {
        return res.status(404).json({ error: 'Rule not found' });
      }
  
      
  
      res.json({ rule: data });
    } catch (error) {
      console.error('Error fetching GFR rule by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = approvalRouter;
