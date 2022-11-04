let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET ROUTE for the book List page = READ operations */
router.get('/', bookController.displayBookList);

/* GET ROUTE for displaying Add page - CREATE operations */
router.get('/add', (req,res, next) => {
    res.render('book/add', {title: 'Add Book'});

});

/* GET ROUTE for processing Add page - CREATE operations */
router.post('/add', (req,res, next) => {
    let newBook = Book({
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');

        }

    });

});

/* GET ROUTE for displaying Edit page - UPDATE operations */
router.get('/edit/:id', (req,res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });
});

/* GET ROUTE for processing EDIT page - UPDATE operations */
router.post('/edit/:id', (req,res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "price": req.body.price

    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });

});

/* GET to perform Book Deletion - DELETE operations */
router.get('/delete/:id', (req,res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });

});

module.exports = router;