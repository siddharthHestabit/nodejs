const mongoose = require('mongoose');

const ConnectDatabase = async () => {
    try {
        const mongoURI = `${process.env.MONGO_URI + process.env.DATABASE_NAME}`;
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log("Database connected");
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = ConnectDatabase;