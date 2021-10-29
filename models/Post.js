const {Model, DataTypes} = require("sequelize")
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Post extends Model {}

Post.init({
    // add properites here, ex:
    title: {
         type: DataTypes.STRING,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
    },
    text:{
        type: DataTypes.TEXT,
        validate:{
        }
    },
},
    sequelize
);

module.exports=Post