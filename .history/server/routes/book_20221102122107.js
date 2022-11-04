let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

/* GET ROUTE for the book List page = READ operations */
router.get('/', (req, res, next) =>{
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book', {title: 'Books', BookList: bookList})

        }
    });

});

module.exports = router;