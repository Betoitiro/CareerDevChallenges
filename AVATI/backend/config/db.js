const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb://${dbUser}:${dbPassword}@cluster0-shard-00-00.qj9dp.mongodb.net:27017,cluster0-shard-00-01.qj9dp.mongodb.net:27017,cluster0-shard-00-02.qj9dp.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority`
    );
    
    console.log('Banco conectado com sucesso!!');
    return dbConn;
  } catch (err) {
    console.log(err);
  }
}

conn();

module.exports = conn;
