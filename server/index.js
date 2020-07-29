const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');
const cors = require('cors');
const { resolve, parse } = require('path');

// Configure storage file
const storage = multer.diskStorage({
  destination: resolve(`${__dirname}/uploads/`),
  filename: function (req, file, cb) {
    const filename = parse(file).name;
    cb('', `${Date.now}_${filename}.${mimeTypes.extension(file.mimetype)}`);
  },
});
const uploadConfig = multer({
  storage,
});

// Node.js server
app
  .use(cors)
  .get('/', (req, res) => {
    res.send('Hello node');
  })
  .post('/api/upload', uploadConfig.single('file'), (req, res) => {
    res.send('Upload success');
  });

app.listen(process.env.PORT || 8000, () => {
  console.log('Server running on http://localhost:8000');
});
