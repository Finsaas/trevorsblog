var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

/* GET All Blogs */
 .get(function(req, res) {
   mongoose.model('Blog').find({}, function(err, blogs){
     if(err){
       return console.log(err);
     } else {
       res.json(blogs);
     }
   });
 })

 .post(function(req, res){
   var title = req.body.title;
   var body = req.body.body;

   mongoose.model('Blog').create({
     title: title,
     body: body
   }, function(err, blogs){
     if(err){
       res.send("houston we have a problem");
     } else{
       console.log("New blog named " + blogs + " created!");
       res.redirect('https://trevors-blog.herokuapp.com/blog.html');
       res.send(blogs);
     }
   });
 });


 router.route('/:id')
   .get(function(req, res) {
       mongoose.model('Blog').findById({
           _id: req.params.id
       }, function(err, blogs) {
           if (err)
               res.send(err);

           res.json(blogs);
       });
   })

   // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:id)
 .put(function(req, res) {
       mongoose.model('Blog').findById({
           _id: req.params.id
       }, function(err, blog) {
         blog.title = req.body.title;
         blog.body = req.body.body;
         console.log(req);
           if (err)
               res.send(err);

           blog.save();
           res.json(blog)
       });
   })
   // delete the bear with this id (accessed at DELETE http://localhost:8080/api/blogs/:id)
   .delete(function(req, res) {
       mongoose.model('Blog').remove({
           _id: req.params.id
       }, function(err, blogs) {
           if (err)
               res.send(err);

           res.json({ message: 'Successfully deleted' });
       });
   });

module.exports = router;