//#1
 const topicsQueries = require("../db/queries.topics.js");

 module.exports = {
   index(req, res, next){

//#2
      topicsQueries.getAllTopics((err, topics) => {

//#3
        if(err){
          res.redirect(500, "static/index");
        } else {
          res.render("topics/index", {topics});
        }
      })
   },

   new(req, res, next){
     res.render("topics/new");
   },

   create(req, res, next){
     let newTopics = {
       title: req.body.title,
       description: req.body.description
     };
     topicsQueries.addTopics(newTopics, (err, topics) => {
       if(err){
         res.redirect(500, "/topics/new");
       } else {
         res.redirect(303, `/topics/${topics.id}`);
       }
     })
   },

   show(req, res, next){
     topicsQueries.getTopics(req.params.id, (err, topics) => {
       if(err || topics == null){
         res.redirect(404, "/");
       } else {
         res.render("topics/show", {topics});
       }
     });
   },

   destroy(req, res, next){
     topicsQueries.deleteTopics(req.params.id, (err, topics) => {
       if(err){
         res.redirect(500, `/topics/${topics.id}`)
       } else {
         res.redirect(303, "/topics")
       }
     });
   },

   edit(req, res, next){
     topicsQueries.getTopics(req.params.id, (err, topics) => {
       if(err || topics == null){
         res.redirect(404, "/");
       } else {
         res.render("topics/edit", {topics});
       }
     });
   }

 }
