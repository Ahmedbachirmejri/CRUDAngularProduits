import express from 'express';
import mongoose from "mongoose";
import { errorHandler, notFoundError } from './middlewares/error-handler.js';
import morgan from 'morgan';
import cors from "cors";
import multer,{diskStorage} from "multer";

import product from './routes/ProductRoutes.js';


const options ={
  definition: {
    openapi : '3.0.0',
    info :{
      title :'BackendProduit',
      version : '1.0.0'
    },
    servers:[
      {
        url: 'http://localhost:9090/'
      }
    ]
  },
  apis: ["./Routes/*.js"],
}


const app=express();
const port=process.env.PORT || 9090;
const databaseName = "BackendProduit";


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    console.log(`connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });
app.set('view engine', 'ejs');
app.get('/login', (req, res) => {
  res.render('../login')
})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true)
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'), false)
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })
app.post('/upload', upload.single('file'), (req, res) => {
  // req.file contains the uploaded file
  const fileName = req.file.originalname
  const filePath = req.file.path
  console.log(`File uploaded: ${fileName} at ${filePath}`)

  // Send a response back to the client
  res.send({ message: 'File uploaded successfully.' })
})
app.use("/image",express.static("uploads/"));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img",express.static("public/images"));

// ? Register the session router



app.use('/produit',product);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });


process.on('TypeError:', (reason, promise) => {
  console.log('TypeError at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})