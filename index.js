const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./Model/user.model');
const app = express();

const url = 'mongodb://localhost:27017/socially_recurited';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const createAndSaveUser = async () => {
    try {
        const user = new UserModel({
            name: "Siddharth",
            email: "siddharth@gmail.com",
            mobile: "1234567890"
        });

        const savedUser = await user.save();
        console.log("User saved successfully:", savedUser);
    } catch (err) {
        console.log("Something went wrong:", err);
    }
};

// createAndSaveUser();

const findUser = async () => {
    const user = await UserModel.updateOne({ _id: '64b3d946174fd75c8cc0bd87' }, { $set: { name: "sidd", email: "1234sidd@gmail.com" } });

    console.log(user);
}

findUser();

app.get('/', (req, res) => {
    res.send("Connected with Express");
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
