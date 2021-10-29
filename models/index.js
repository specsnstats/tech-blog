const User = require("./User");
const Post = require("./Post");

User.hasMany(Post,{
    onDelete:"CASCADE"
});

Post.belongsTo(User);

module.exports={
    User,
    Post
};