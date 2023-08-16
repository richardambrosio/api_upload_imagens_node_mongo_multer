const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

const PictureController = require('../controllers/pictureController');

router.get('/', PictureController.findAll);
router.post('/', upload.single('file'), PictureController.create);
router.delete('/:id', PictureController.remove);

module.exports = router;