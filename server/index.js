const express = require('express');
const serverless = require('serverless-http');

const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { resolve, parse } = require('path');

// Configure storage file
const storage = multer.diskStorage({
  destination: resolve(
    process.env.NODE_ENV !== 'production' ? `${__dirname}/uploads/` : '/tmp'
  ),
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
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Only once origin | To receive cookies it cannot be a wildcard
  res.header('Access-Control-Allow-Credentials', 'true');
  console.log('[Server - Cookies]:', req.cookies);
  res.send({
    msg: 'Hello from api',
  });
};

const BASE_URL =
  process.env.NODE_ENV !== 'production' ? '' : '/.netlify/functions';

// Node.js server
app
  .use(cors())
  .use(morgan('tiny'))
  .use(cookieParser())
  .get(`${BASE_URL}/`, (req, res) => {
    res.send('Hello node');
  })
  .options(`${BASE_URL}/api/`, (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // | To receive cookies it cannot be a wildcard
    res.header('Access-Control-Allow-Methods', 'PUT');
    res.header('Access-Control-Allow-Headers', 'Content-type, Authentication');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(204).send();
  })
  .get(`${BASE_URL}/api/`, api)
  .post(`${BASE_URL}/api/`, api)
  .put(`${BASE_URL}/api/`, api)
  .post(`${BASE_URL}/api/upload`, uploadConfig.single('file'), (req, res) => {
    res.send('Upload success');
  });

if (process.env.NODE_ENV !== 'production') {
  app.listen(process.env.PORT || 8000, () => {
    console.log(
      '[Server - Node.js]:',
      'Server running on http://localhost:8000'
    );
  });
} else {
  module.exports = app;
  module.exports.handler = serverless(app);
}
