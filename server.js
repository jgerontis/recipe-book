/*
This file handles our api endpoints
*/
// import so you can use it
const express = require("express");
const { store, Recipe } = require("./model");
const cors = require("cors");
// instantiate your app/server
const app = express();
app.use(cors());
app.use(express.static("static"));
app.use(express.json({}));

module.exports = app;

// Post - crates one todo (does not have a URL param)
app.post("/recipe", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a recipe with body`, req.body);

  let recipe = {
    name: req.body.name || "",
    ingredients: req.body.ingredients || "",
    instructions: req.body.instructions || "",
  };

  Recipe.create(creatingTodo, (err, todo) => {
    // check if there is an error
    if (err) {
      console.log(`unable to create recipe`);
      res.status(500).json({
        message: "unable to create recipe",
        error: err,
      });
      return;
    }
    // success!!! return the recipe
    res.status(201).json(recipe);
  });
});

// Delete - deletes the todo with the given id
app.delete("/recipe/:id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`deleting recipe with id: ${req.params.id}`);

  Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
    if (err) {
      console.log(`unable to delete recipe`);
      res.status(500).json({
        message: "unable to delete recipe",
        error: err,
      });
      return;
    } else if (recipe === null) {
      console.log(`unable to delete recipe with id ${req.params.id}`);
      res.status(404).json({
        message: `recipe with id ${req.params.id} not found`,
        error: err,
      });
    } else {
      res.status(200).json(todo);
    }
  });
});



// Get - gets all of the todos (does not have a URL param)
app.get("/recipe", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    let findQuery = {};
  
    console.log(req.query);
    if (req.query.name !== null && req.query.name !== undefined) {
      findQuery.name = req.query.name;
    }
  
    
  
    console.log("getting all recipes with find query", findQuery);
    // return all of the recipes in the store
  
    Recipe.find(findQuery, function (err, recipes) {
      // check if there was an error
      if (err) {
        console.log(`there was an error listing Recipes`, err);
        // send back the error
        res.status(500).json({ message: `unable to list Recipes`, error: err });
        return;
      }
      // success!!! return all the todos
      res.status(200).json(recipes);
    });
  });
























module.exports = app;
