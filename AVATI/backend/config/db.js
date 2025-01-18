const mongoose = require('mongoose');
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async() => {
  try{
    const dbConn = await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qj9dp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    console.log('Banco conectado com sucesso!!')
    return dbConn
  }catch(err){
    console.log(err)
  }
}

conn()

module.exports = conn