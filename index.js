const express = require("express")
const app = express()
const path = require("path")

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

// app.set("view engine", "ejs");
app.use(express.static("view"))

app.get("/upload", (req, res) => {
    res.render("upload")
})

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image Uploaded")
})

app.listen(3000)
console.log("3000 is the port")
