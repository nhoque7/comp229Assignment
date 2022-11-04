let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title : 'my Home Page'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'the About me page'});
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('projects', { title: 'my Projects page'});
}

module.exports.displayServicePage = (req, res, next) => {
    res.render('services', { title: 'my Service page'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'my Contact page'});
}