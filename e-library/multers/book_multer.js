import multer from "multer";
import path from "path"
const allowedExtensions = ['.pdf']

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(allowedExtensions.includes(path.extname(file.originalname))){
            cb(null, 'public/books')
        }else{
            cb(new Error('file not supported'))
        }
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname.replaceAll(" ", "_"))
    }
})

const multerStorage = multer({storage})

export default multerStorage