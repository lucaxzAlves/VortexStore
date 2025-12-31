const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String,
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }

})

module.exports = mongoose.model('UserData', UserSchema)