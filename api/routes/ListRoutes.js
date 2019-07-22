// Initialize express router
let router = require('express').Router();

router.get('/', function (req, res) {
  res.status(500).json(
    'ok'
  ); 
});

router.get('/ciao', function (req, res) {
    res.json({
        status: 'ciao',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

router.get('/prova', function (req, res) {
  res.json({
      status: 'prova',
      message: 'Welcome to RESTHub crafted with love!'
  });
});

router.post('/users', function(req, res) {
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(token + ' ' + geo);
});

// Export API routes
module.exports = router;