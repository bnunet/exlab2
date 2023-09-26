var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', (req, res) => {
  res.send({ 'result': ~~req.query.a + ~~req.query.b})
})

module.exports = router;
