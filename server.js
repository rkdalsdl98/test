const express = require('express')
const app = express()
const http = require('http')

app.set("view engine", "pug")
app.set("views", __dirname + "/public")
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req, res) => res.render("home"))

const httpServer = http.createServer(app)

httpServer.listen(3000, () =>{console.log('httpserver listening to 3000')}) //app으로 리슨을 하는게 아닌 httpserver로 리슨해야함.
