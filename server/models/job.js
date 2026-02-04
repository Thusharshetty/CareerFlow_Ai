const mongoose = require('mongoose');

const JobSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    position: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Wishlist', 'Applied', 'Interviewing', 'Offer', 'Rejected'],
    default: 'Wishlist'
  },
  jobDescription: {
    type: String, 
  },
  dateApplied:{
    type:Date,
    default:Date.now
  },
  notes: {
    type: String 
  }
},{ timestamps: true });

module.exports=mongoose.model('Job', JobSchema);