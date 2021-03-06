const express = require('express');
const sequelize = require("./config/connection.js");
const session = require("express-session");
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require("path");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// Requiring our models for syncing
const {User,Post} = require('./models');
const routes = require("./controllers");

app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
     store: new SequelizeStore({
        db:sequelize
     })
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});