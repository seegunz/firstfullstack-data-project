const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const router = require('./router/router')
const PORT = 4000 || process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/data', router)

app.listen(PORT, ()=>`server started on port ${PORT}`)