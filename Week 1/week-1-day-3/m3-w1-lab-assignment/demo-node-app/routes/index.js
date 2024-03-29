var express = require('express');
var router = express.Router();

var { check, validationResult } = require('express-validator');

router.get('/', function(req, res) {
    res.render('form', { title: 'Registration form' });
});

router.post('/', 
    [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
    check('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
    ],
    function(req, res) {
        console.log(req.body);
        var errors = validationResult(req);
        if (errors.isEmpty()) {
            res.send('Thank you for your registration!');
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
});

module.exports = router;