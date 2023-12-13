const mongoose = require('mongoose');

const gfrSchema = new mongoose.Schema(
  {
    rule: { type: String,required: true},
    heading: { type: String,required: true},
    description: { type: String,required: true},
    category: { type: String,required: true}
  },
  {
    timestamps: true,
  }
);
const GFR = mongoose.model('GFR', gfrSchema);
module.exports=GFR;

