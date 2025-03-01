import { resolve, parse } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import express from 'express';
import serverless from 'serverless-http';
import multer from 'multer';
import mimeTypes from 'mime-types';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
const BASE_URL = process.env.APP_ENV !== 'production' ? '' : '/.netlify/functions/server';

// let dirname;
// try {
//   dirname = fileURLToPath(new URL('.', import.meta.url));
// } catch (e) {
//   // Fallback for environments where import.meta.url is not supported
//   dirname = '/tmp';
// }
const dirname = fileURLToPath(new URL('.', import.meta.url));
// Configure storage file
const storage = multer.diskStorage({
  destination: resolve(process.env.APP_ENV !== 'production' ? `${dirname}/uploads/` : `/tmp`),
  filename: function (req, file, cb) {
    const filename = parse(file.originalname).name;
    cb(null, `${Date.now()}_${filename}.${mimeTypes.extension(file.mimetype)}`);
  },
});
const uploadConfig = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg', 'image/svg'];
    if (allowedMimes.includes(file.mimetype)) {
      return cb(null, true);
    }

    cb(new Error('Invalid file type.'));
  },
});

const api = (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'null'); // Block cors
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Only once origin | To receive cookies it cannot be a wildcard
  res.header('Access-Control-Allow-Credentials', 'true');
  console.log('[Server - Cookies]:', req.cookies);
  res.send({
    message: 'Hello from api',
  });
};

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
    res.send({
      message: 'Uploaded',
    });
  });

// if (process.env.APP_ENV !== 'production') {
//   app.listen(process.env.PORT || 8000, () => {
//     console.log('[Server - Node.js]:', 'Server running on http://localhost:8000');
//   });
// }

// [Express on Netlify | Netlify Docs](https://docs.netlify.com/frameworks/express/#use-express-with-a-frontend-app)
export const handler = serverless(app);
