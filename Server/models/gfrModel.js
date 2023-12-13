const mongoose = require('mongoose');

const gfrSchema = new mongoose.Schema(
  {
    rule: { type: String,},
    heading: { type: String,},
    description: { type: String},
    category: { type: String }
  },
  {
    timestamps: true,
  }
);
const GFR = mongoose.model('GFR', gfrSchema);
module.exports=GFR;

