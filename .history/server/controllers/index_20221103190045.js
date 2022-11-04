let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title : 'my Home Page'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'the About me page'});
}