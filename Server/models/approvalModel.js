const mongoose = require('mongoose');

  const approvalSchema = new mongoose.Schema(
    {
      editBy: { type: String, required: true },
      editAt: { type: Date, required: true },
      dataOriginal: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        rule: { type: String, required: true },
        category: { type: String, required: false },
      },
      dataChanged: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        rule: { type: String, required: true },
        category: { type: String, required: false },
      },
      isDelete: { type: Boolean, required: true },
      isEdit: { type: Boolean, required: true },
      approval1: { type: String, default: '' },
      approval1Date: { type: Date },
      approval2: { type: String, default: '' },
      approval2Date: { type: Date },
      approval3: { type: String, default: '' },
      approval3Date: { type: Date },
      isApproval: { type: String, default: "to be reviewed" },
    },
    {
      timestamps: true,
    }
  );

const Approval = mongoose.model('Approval', approvalSchema);
module.exports = Approval;
