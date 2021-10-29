const sequelize=require("../config/connection.js");
const {User, Post} = require("../models");

const seed = async()=>{
    const userData = await User.bulkCreate([
        {
            username:"specs",
            password:"password"
        },
        {
            username:"mercedes",
            password:"password"
        },
        {
            username:"aleman",
            password:"password"
        },
        {
            username:"luli",
            password:"password"
        },
    ],{
        individualHooks: true
    })
    const postData = await Post.bulkCreate([
        {
            title: "Monday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:1
        },
        {
            title: "Tuesday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:2
        },
        {
            title: "Wednesday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:2
        },
        {
            title: "Thursday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:3
        },
        {
            title: "Friday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:3
        },
        {
            title: "Saturday's Quote",
            text: "Ciggarettes are 50 percent ignorance, and 50 percent punishment",
            UserId:4
        },
    ])
}