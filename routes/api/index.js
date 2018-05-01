var router = require('express').Router();

router.use('/events', require('./eventsList'));

module.exports = router;