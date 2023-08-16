import multer from  "multer";
import path from "path"

const storage = multer.diskStorage({
    destination: function(req, file, cb)  {
          cb(null, path.join(process.cwd(), "src", "upload"))
    },
    filename: function(req, file, cb) {
        const newFile = Date.now() + file.originalname
        cb(null,  newFile)
    }
})
export const upload = multer({storage: storage})