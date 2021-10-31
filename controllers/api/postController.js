const express = require("express");
const router = express.Router();
const { Post,User } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include:[User]
  })
    .then(dbPost => {
      if (dbPost.length) {
        res.json(dbPost);
      } else {
        res.status(404).json({ message: "No posts found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

router.post("/", (req, res) => {
  console.log(req.session.user.username)
  if(!req.session.user){
    res.status(401).json({message:"Please login to post!"})
  } else {
    Post.create({
      title: req.body.title,
      text: req.body.text,
      UserId: req.session.user.id
    })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
  }
});

module.exports = router;
