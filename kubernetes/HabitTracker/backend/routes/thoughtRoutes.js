const express = require('express');
const { postThought, getThoughts } = require('../controllers/thoughtController');

const router = express.Router();

router.post('/post-thought', postThought);
router.get('/get-thoughts', getThoughts);

module.exports = router;
