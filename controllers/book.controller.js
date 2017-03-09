var Book = require('../models/book.model');

//all books
module.exports.book_list = function(req, res, next) {
    Book.find({}, function(err, results){
    res.json(results);
  });
};

//page for a specific book
module.exports.book_detail = function(req, res, next) {
    Book.findOne({_id: req.params.id}, function(err, results) {
      res.json(results)
});
};

//book create form on GET
module.exports.book_create_get = function(req, res, next) {
    res.send('form');
};
//book create on POST
module.exports.book_create_post = function(req, res, next) {
	var book = req.body;
	var newBook = new Book(book);

	newBook.save(function(err, results){
		if(err){
			res.send(err);
		}
		res.json(results);
	});
  };
module.exports.book_update_put = function(req, res, next){
	var query = {_id: [req.params.id]};
	var body = req.body;
	Book.update(query, {$set:body}, {}, function(err, results){
		if(err){
			res.send(err);
		}
		res.json(results);
	});
}; 
// Delete Movie
module.exports.book_delete_delete = function(req, res, next){
	var query = {_id: [req.params.id]};
	Book.remove(query, function(err){
		if(err){
			res.send(err);
		}
		res.json({
			msg:"Success"
		});
	});
};