let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET ROUTE for the book List page = READ operations */
router.get('/', bookController.displayBookList);

/* GET ROUTE for displaying Add page - CREATE operations */
router.get('/add', bookController.displayAddPage);

/* GET ROUTE for processing Add page - CREATE operations */
router.post('/add', bookController.processAddPage);

/* GET ROUTE for displaying Edit page - UPDATE operations */
router.get('/edit/:id', bookController.displayEditPage);

/* GET ROUTE for processing EDIT page - UPDATE operations */
router.post('/edit/:id', bookController.processEditPage);

/* GET to perform Book Deletion - DELETE operations */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;