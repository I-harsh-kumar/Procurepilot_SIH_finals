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

module.exports = approvalRouter;
