const express = require('express');
const router = express.Router();
const {Post,User} = require('../models');

router.get("/",(req,res)=>{
        // res.json(hbsPost)
        res.render("home")
})

router.get("/profile",(req,res)=>{
        res.render("profile")
})

router.get('/login', (req, res) => {
    console.log(req.session.user)
    if(req.session.user){
        res.redirect('/profile')
    }
    res.render('login')
})

module.exports = router;