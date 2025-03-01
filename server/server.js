import { resolve, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

import express from 'express';
import serverless from 'serverless-http';
import multer from 'multer';
import mimeTypes from 'mime-types';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = fileURLToPath(new URL('.', import.meta.url));
// Configure storage file
const storage = multer.diskStorage({
  destination: resolve(process.env.NODE_ENV !== 'production' ? `${__dirname}/uploads/` : '/tmp'),
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

const BASE_URL = process.env.NODE_ENV !== 'production' ? '' : '/.netlify/functions/server';

// Node.js server
app
  .use(cors())
  .use(morgan('tiny'))
  .use(cookieParser())
  .get(`${BASE_URL}/`, (req, res) => {
    res.send('Hello node 2025');
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
    console.log('[Server - Node.js]:', 'Server running on http://localhost:8000');
  });
}
const handler = serverless(app);
export { app, handler };
