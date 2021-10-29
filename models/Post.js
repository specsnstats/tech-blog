const {Model, DataTypes} = require("sequelize")
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init({
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
},{
    sequelize,
}
);

module.exports=Post