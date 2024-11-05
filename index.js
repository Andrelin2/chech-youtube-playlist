const express = require("express")
const mongodb = require("mongodb")
const mongoose = require("mongoose")
const express_session = require("express-session")
const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")
const connect_mongo = require("connect-mongo")
const userRouter = require("./routes/user")
const youtubePlaylistRouter = require("./routes/youtubePlaylist")
require("dotenv").config()

const app = express()

const port = process.env.port || 3000
const mongo_uri = process.env.mongo_uri
const secret = process.env.secret

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use("/user",userRouter)
app.use("/youtubePlaylist",youtubePlaylistRouter)

app.get("/",(req,res) => {
    res.redirect("/youtubePlaylist/main")
})


app.listen(port, () => {
    console.log("Listening on port: ", port)
})