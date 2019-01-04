const express = require('express');
const router = express.Router();
const passport = require('passport');

//User 

const User =  require('../models/User');

router.get('/login', (req,res)=>{
    res.render('login')
});


router.post('/login', (req,res,next)=>{
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login'
    })(req,res,next);
});



module.exports = router;