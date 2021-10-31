const express = require('express');
const router = express.Router();
const {User, Post} = require('../../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    User.findAll({
        include:[Post]
    }).then(dbUsers=>{
        if(dbUsers.length){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

router.post("/", async (req,res)=>{
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.username = userData.username;
          req.session.password = userData.password;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            res.status(401).json({message:"incorrect username or password"})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    id:foundUser.id
                }
                res.json(foundUser)
                console.log("Login Successful!")
            } else {
                res.status(401).json({message:"incorrect username or password"})
            }
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
})

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(delUser=>{
        res.json(delUser)
    })
})

router.post('/logout', (req, res) => {
    if (req.session.user) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;