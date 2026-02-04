const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(' MongoDB Connected Successfully');
    } catch (err) {
        console.error(' MongoDB Connection Failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;