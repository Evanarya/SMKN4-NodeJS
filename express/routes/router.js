const express = require('express');
const router = express.Router();

const{ getAll, create } = require('../controllers/controller');

router.get('/', (req, res) => {
  res.send('Haii, Lovee!');
});

router.get('/getAll', getAll);
router.post('/create', create);

module.exports = router;
