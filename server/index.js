const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { resolve, parse } = require('path');

// Configure storage file
const storage = multer.diskStorage({
  destination: resolve(`${__dirname}/uploads/`),
  filename: function (req, file, cb) {
    const filename = parse(file.originalname).name;
    cb('', `${Date.now()}_${filename}.${mimeTypes.extension(file.mimetype)}`);
  },
});
const uploadConfig = multer({
  storage,
});

const api = (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'null'); // Block cors
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Only once origin
  res.send({
    msg: 'Hello from api',
  });
};

// Node.js server
app
  // .use(cors())
  .use(morgan('tiny'))
  .use(cookieParser())
  .get('/', (req, res) => {
    res.send('Hello node');
  })
  .options('/api/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT');
    res.header('Access-Control-Allow-Headers', 'Content-type, Authentication');
    res.status(204).send();
  })
  .get('/api/', api)
  .post('/api/', api)
  .put('/api/', api)
  .post('/api/upload', uploadConfig.single('file'), (req, res) => {
    res.send('Upload success');
  });

app.listen(process.env.PORT || 8000, () => {
  console.log('Server running on http://localhost:8000');
});
