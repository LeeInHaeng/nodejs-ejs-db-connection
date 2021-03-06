var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET ALL BOOKS
router.get('/api/books', function(req,res){
  Book.find((err, books) => {
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(books);
  });
});

// GET SINGLE BOOK
router.get('/api/books/:book_id', function(req, res){
  Book.findOne({_id: req.params.book_id}, (err,book) => {
    if(err) return res.status(500).json({error: err});
    if(!book) return res.status(404).json({error: 'book not found'});
    res.json(book);
  });
});

// GET BOOK BY AUTHOR
router.get('/api/books/author/:author', function(req, res){
  // query, title과 published_date만, 결과
  Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1}, (err, books) => {
    if(err) return res.status(500).json({error: err});
    if(books.length === 0) return res.status(404).json({error: 'book not found'});
    res.json(books);
  });
});

// CREATE BOOK
router.post('/api/books', function(req, res){
  var book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  if(req.body.published_date)
    book.published_date = new Date(req.body.published_date);
  // else default date

  book.save(err => {
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});

// UPDATE THE BOOK
router.put('/api/books/:book_id', function(req, res){
  Book.findById(req.params.book_id, (err, book) => {
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!book) return res.status(404).json({ error: 'book not found' });

    if(req.body.title) book.title = req.body.title;
    if(req.body.author) book.author = req.body.author;
    if(req.body.published_date) book.published_date = req.body.published_date;

    book.save(err => {
      if(err) res.status(500).json({error: 'failed to update'});
      res.json({message: 'book updated'});
    });

  });
});

// DELETE BOOK
router.delete('/api/books/:book_id', function(req, res){
  Book.remove({ _id: req.params.book_id }, (err, output) => {
    if(err) return res.status(500).json({ error: "database failure" });
    res.status(204).end();
  });
});

module.exports = router;
