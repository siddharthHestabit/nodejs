const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        minlength: [3, 'Name must be at least 3 characters long'],
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        minlength: [6, 'Email must be at least 6 characters long'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        validate: {
            validator: async function (value) {
                const emailCount = await mongoose.models.UserModel.countDocuments({ email: value });
                return emailCount === 0;
            },
            message: 'Email already exists!',
        },
    },
    password: {
        required: [true, "Password is required"],
        type: String,
    }
}, { timestamps: true, });

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const bcrypt = require('bcrypt');
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const UserModel = mongoose.model('UserModel', UserSchema);