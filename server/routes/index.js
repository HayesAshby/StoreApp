const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.send('health route working.');


})
router.get('/data', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    name: 'bob',
    data: 'unicorns and milkshakes'
  });


})

module.exports = router;