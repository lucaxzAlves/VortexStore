const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000;
require('dotenv').config({ path: __dirname + '/.env' });
const crypto = require('crypto')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("🟢 Conectado ao MongoDB Atlas"))
.catch((err) => console.error("🔴 Erro ao conectar ao MongoDB", err));

const UserModel = require('./models/userModel')


app.post('/register', async (req, res) => {
 const { name, email, password } = req.body

 const existName = await userModel.findOne({ name })
 const existEmail = await userModel.findOne({ email })
 if(existName || existEmail) {
  res.status(400).send("user ja existe")
 }
 const user = new userModel({ name, email, password, role:"USER" })

 await user.save()
})

const sessions = new Map()

app.get('/login', async (req, res) => {
  const { email, password } = req.body

  const userExist = await UserModel.find({ email, password })
  if(!userExist) {
    res.status(404).send("user nao encontrado")
  }

  const sessionId = generateSessionId()

  sessions.set(sessionId, {
    // user id e timeat
  })

 res.cookie('session_id', sessionId, {
  httpOnly: true,
  sameSite: 'lax',
  secure: false
 })

})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`You can access the endpoint at http://localhost:${PORT}/`);
});