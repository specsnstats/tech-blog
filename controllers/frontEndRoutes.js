const express = require('express');
const router = express.Router();
const {Post,User} = require('../models');

router.get("/",(req,res)=>{
    User.findAll({
        include: [Post]
    }).then(dbUsers=>{
        res.render("home")
    })

})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }
    User.findByPk(req.session.user.id,{
        include:[Post]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })})

router.get('/login', (req, res) => {
    console.log(req.session.user)
    if(req.session.user){
        res.redirect('/profile')
    }
    res.render('login')
})

module.exports = router;