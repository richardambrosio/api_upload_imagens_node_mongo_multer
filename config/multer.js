const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, fn) {
        fn(null, "uploads/");
    },
    filename: function(req, file, fn) {
        fn(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({storage});

module.exports = upload;