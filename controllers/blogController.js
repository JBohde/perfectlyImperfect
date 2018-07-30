// Requiring our Blog model
var db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the posts
  findAll: function(req, res) {
    db.BlogPost
    .find({})
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // Get route for returning posts of a specific category
  findByCategory: function(req, res) {
    db.BlogPost.find({
      where: { category: req.params.category }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // GET route for retrieving a single post
  findOne: function(req, res) {
    db.BlogPost.findOne({
      where: { id: req.params.id }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // POST route for saving a new post
  addPost: function(req, res) {
    console.log(req.body);
    db.BlogPost.create({
      author: req.body.author,
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // DELETE route for deleting posts
  deletePost: function(req, res) {
    db.BlogPost.destroy({
      where: {id: req.params.id}
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // PUT route for updating posts
  update: function(req, res) {
    db.BlogPost.update(req.body,
      {  where: { id: req.body.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  }
};
