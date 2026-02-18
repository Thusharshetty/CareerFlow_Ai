const Job=require('../models/job');

exports.getJobs= async (req,res)=>{
    const currentUserId = String(req.user.id);
   try{
    const jobs=await Job.find({userId:currentUserId}).sort({createdAt:-1})
    res.json(jobs)
   } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createJob=async (req,res)=>{
    try{
        const{company, position, status, jobDescription}=req.body;
        const newJob=new Job({
            userId:String(req.user.id), // Link to the MySQL User
            company,
            position,
            status,
            jobDescription
        });
        const job=await newJob.save();
        res.status(201).json(job);
    } catch (err) {
        console.error(" Error in createJob:", err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateJobStatus=async (req,res)=>{
    try{
        const {status}=req.body;
        const job=await Job.findOne({_id:req.params.id, userId: req.user.id});
        if(!job) return res.status(404).json({ message: 'Job not found' });
        job.status=status;
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteJob=async (req,res)=>{
    try{
        const job=await Job.findByIdAndDelete({_id:req.params.id, userId: req.user.id});
        if(!job) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};