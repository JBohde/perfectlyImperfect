const router = require("express").Router();
const blogController = require("../controllers/blogController");
// Routes
// =============================================================

  router.route("/perfectlyimperfect/admin/posts")
    .get(blogController.findAll) //get all blog posts
    .post(blogController.addPost) //add a new post
    .put(blogController.updatePost) // update with new post

  router.route("/perfectlyimperfect/posts/category/:category")
    .get(blogController.findByCategory) // Get route for returning posts of a specific category

  router.route("/perfectlyimperfect/blog/:id")
    .get(blogController.findOne) //find a specific post
    .delete(blogController.deletePost) //delete a specific post


module.exports = router;