const express=require("express");
const router=express.Router();
const auth=require("../middleware/authMiddleware");
const {getJobs, createJob, updateJobStatus, deleteJob}=require("../controllers/jobController");

router.get("/",auth,getJobs);
router.post("/",auth,createJob);
router.put("/:id",auth,updateJobStatus);
router.delete("/:id",auth,deleteJob);

module.exports=router;