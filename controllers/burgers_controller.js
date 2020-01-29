var path = require("path");
var express = require("express");
var router = express.Router();
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  db.Burger.findAll({raw:true}).then(function(response){        
    res.render("index",{burgers:response});
    console.log(response);
    
  })
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(response){        
    res.status(200).end();
    // res.render("index", response);
  })
});

router.put("/api/burgers/:id", function(req, res) {

  db.Burger.update({  devoured: req.body.devoured},
    {where: {id: req.params.id},
    
  }).then(function(result) {
    if (result.changedRows == 0) {
      
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

