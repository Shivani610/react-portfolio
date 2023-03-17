const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const PORT = process.env.PORT || 5000
const db = require("./config/db")
db()
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/contacts", require("./routes/ContactRoutes"))
app.listen(PORT, console.log(`SERVER RUNNING http://localhost:${PORT}`))