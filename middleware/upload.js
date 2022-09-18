const path = require('path');
const multer = require('multer');

// File Path
const filePath = "uploads"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, filePath)
    },
    filename: (req, file, cb) => { 
        console.log(file)
        const fileExt = path.extname(file.originalname)
        const fileName = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now()

        cb(null, fileName + fileExt)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: "1000000" // 1MB
    },
    fileFilter: (req, file, cb) => {
        console.log(file)
        if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
            cb(null, true)
        } else {
            cb(new Error("Only jpg, png & jpeg file format supported!"))
        }
    }
})

module.exports = upload