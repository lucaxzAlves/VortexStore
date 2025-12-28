const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String,
    role: "USER" || "ADMIN"

})

module.exports = mongoose.model('UserData', UserSchema)