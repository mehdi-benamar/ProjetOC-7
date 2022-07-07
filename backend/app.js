const express = require("express")
const path = require("path")
const authRoute = require("./routes/users")
const blogsRoute = require("./routes/blogs")


const app = express()
app.use(express.json())


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
})


app.use("/api/auth", authRoute)
app.use("/api", blogsRoute)

module.exports = app