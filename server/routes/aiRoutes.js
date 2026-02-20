const express=require('express');
const router=express.Router();
const {analyzeJob}=require('../controllers/aiController');
const auth=require('../middleware/authMiddleware');

router.post('/analyze',auth,analyzeJob);

module.exports=router;