// Requiring our Blog model
var db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the posts
  findAll: function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // Get route for returning posts of a specific category
  findAll: function(req, res) {
    db.Post.findAll({
      where: { category: req.params.category }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // GET route for retrieving a single post
  findOne: function(req, res) {
    db.Post.findOne({
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
    db.Post.create({
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
    db.Post.destroy({
      where: {id: req.params.id}
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },

  // PUT route for updating posts
  update: function(req, res) {
    db.Post.update(req.body,
      {  where: { id: req.body.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  }
};
