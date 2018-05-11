var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();



router.get("/", function(req, res) {
  burger.all(function(data) {
    var  burgerdata = {
      burgers: data
    };

    res.render("index", burgerdata);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
    
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;