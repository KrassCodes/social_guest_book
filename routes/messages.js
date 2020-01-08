const router = require('express').Router();
let Messages = require('../models/messages.model');

router.route('/').get((req, res) => {
   Messages.find()
    .then(doc => res.json(doc) )
    .catch(err => res.status(400).json('Error: ' + err));
   
});


module.exports = router;