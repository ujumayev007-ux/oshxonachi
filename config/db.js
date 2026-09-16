// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/oshxona_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.Hog('MongoDB muvaffaqiyatli ulandi');
    } catch (err) {
        console.error('MongoDB ulanish xatosi:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
