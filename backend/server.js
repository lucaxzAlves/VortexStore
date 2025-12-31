const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000;
require('dotenv').config({ path: __dirname + '/.env' });
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("🟢 Conectado ao MongoDB Atlas"))
.catch((err) => console.error("🔴 Erro ao conectar ao MongoDB", err));

const UserModel = require('./models/userModel')

//authentications endpoints

app.post('/register', async (req, res) => {
 console.log(req.body)
 const { name, email, password } = req.body

 const existName = await UserModel.findOne({ name })
 const existEmail = await UserModel.findOne({ email })
 if(existName || existEmail) {
  res.status(400).send("user ja existe")
 }

 const saltRounds = 10
 const hashPassword = await bcrypt.hash(password, saltRounds)

 const user = new UserModel({ name, email, password: hashPassword, role:"USER" })

 await user.save()

 console.log("usuário cadastrado com sucesso")
})


app.post('/login', async (req, res) => {
  console.log(req.body)
  const { name, password } = req.body

  const user = await UserModel.findOne({ name })
  if(!user) {
    res.status(404).send("user nao encontrado")
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if(!validPassword) {
    return res.status(401).json({ error: "senha invalida" })
  }

  try{
    const secret = process.env.SECRET
    
    const token = jwt.sign({
      userID: user.__id
    }, secret
  )
   console.log('token criado')
   res.status(200).send('usuario logado', token)
  }
  
  catch(error){
   res.send(error.message)
  }


})


app.get('/authVerify', async (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if(!token) {
    return res.status(401).send('acesso negado')
  }
})

//products endpoints

const productsModel = require('./models/productsModel')

app.post('/products/register', async (req, res) => {
  console.log(req.body)
  const { price, name, desc, stock, available } = req.body

 const sameName = await productsModel.findOne({ name })

 if(sameName) {
  return res.send(401).send("nome já utilizado")
 }
 if(!price || !name || !desc || !stock) {
  return res.send(401).send("informações faltando")
 }

 const product = new productsModel({ price, name, desc, stock, available })

 await product.save()

 res.status(200).send("produto cadastrado com sucesso")

 console.log('produto cadastrado com sucesso')

})






app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`You can access the endpoint at http://localhost:${PORT}/`);
});