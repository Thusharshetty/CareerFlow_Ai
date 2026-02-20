const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

const connectMongoDB=require("./config/db_mogo");
const dbMYSQL=require("./config/db_mysql");
const authRoutes=require("./routes/authRoutes");
const jobRoutes = require('./routes/jobRoutes');
const aiRoutes=require('./routes/aiRoutes');


const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());
connectMongoDB();
app.get("/",(req,res)=>{
    res.send('API is running...');
});
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/ai", aiRoutes);
const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))