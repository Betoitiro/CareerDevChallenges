require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT;

const app = express()


//config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Solve CORS (Rota que vai ser usada no react)
app.use(cors({credentials: true, origin: "http://localhost:5173"}))

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")))


//DB connections
require("./config/db.js")

//routes
const router = require("./routes/Router.js")
app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)    
})   