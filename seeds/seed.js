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
            text: "if we cant repair life and death, what is there left to repair?",
            UserId:2
        },
        {
            title: "Wednesday's Quote",
            text: "to a lot of people outer space is synonymous with sperm bank",
            UserId:2
        },
        {
            title: "Thursday's Quote",
            text: "keep eating. work. accept whatever comes. screw your boss. glamorize stupidity.",
            UserId:3
        },
        {
            title: "Friday's Quote",
            text: "stop learning. start living",
            UserId:3
        },
        {
            title: "Saturday's Quote",
            text: "theres a clear link between compassion and stupidity",
            UserId:4
        },
    ])
}