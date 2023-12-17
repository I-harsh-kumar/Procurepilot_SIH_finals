const mongoose = require('mongoose');

const updateUserSchema = new mongoose.Schema(
  {
    member1: { type: String, required: true },
    member2: { type: String, required: true },
    member3: { type: Number, required: true },
    member4: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true,
  }
);
const gfrSchema = new mongoose.Schema(
  {
    rule: { type: String,required: true},
    heading: { type: String,required: true},
    description: { type: String,required: true},
    category: { type: String},
    updatedBy:[updateUserSchema],
  },
  {
    timestamps: true,
  }
);
const GFR = mongoose.model('GFR', gfrSchema);
module.exports=GFR;

