const multer = require('multer');

const diskStorageToUploads = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp')
  },
  filename: (req, file, cb) => {
    cb(null, "whatevs.jpg");
  }
});

const saveToUploads = multer({ storage: diskStorageToUploads });

module.exports = {
  saveToUploads: saveToUploads.single('file')
};