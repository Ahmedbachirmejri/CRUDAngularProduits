import multer,{diskStorage} from "multer";
import {join,dirname} from "path";
import { fileURLToPath } from "url";

const MIME_TYPES={
    "image/jpg":"jpg",
    "image/jpeg":"jpeg",
    "image/png":"png",

};

export default multer({
    storage:diskStorage({
        destination:(req,file,callback)=>{
            const __dirname=dirname(fileURLToPath(import.meta.url));
            callback(null,join(__dirname,"../public/images"));
        },

        filename:(req,file,callback)=>{
            const name=file.originalname.split("").join("_");
            const extension=MIME_TYPES[file.mimetype];
            callback(null,file.originalname)
        },
    }),

    limits:10*1024*1024,
}).single("image");