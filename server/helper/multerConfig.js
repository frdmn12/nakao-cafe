const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, cb) {
    let timeCreate = new Date().toLocaleTimeString().split('.').join('');
    let dateCreate = new Date().toLocaleDateString().split('/').join(''); 
    const formatName = `${dateCreate}-${timeCreate}-${file.originalname}`;
    cb(null, formatName);
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('image'); // 'image' is the field name

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;