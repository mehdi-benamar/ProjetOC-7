const multer = require("multer")
const uuid = require("uuid").v4()

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    const nameFile = file.originalname.split(".")[0].split(" ").join("-")
    const extension = file.mimetype.split("/")[1]
    cb(null, nameFile + "-" + uuid + "." + extension)
  },

  fileFilter: function (req, file, cb) {
    const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

    if(!whitelist.includes(file.mimetype)){
      return cb(new Error("Seules les extensions suivantes sont acceptées: png|jpeg|gif"))
    }

    cb(null, true)
  }
})

module.exports = multer({storage}).single("imageUrl")