const express = require('express');
const router = express.Router();
const {Post,User} = require('../models');

router.get("/",(req,res)=>{
    Post.findAll({
        order:["UserId"],
        include:[User]
    }).then(postData=>{

        const hbsPets = postData.map(post=>post.get({plain:true}))
        // res.json(hbsPost)
        res.render("home",{
            post:hbsPost
        })
    })
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }
    User.findByPk(req.session.user.id,{
        include:[Pet]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router;