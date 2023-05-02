const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const chefs = require("./data/chef.json");
const recipes = require("./data/cuisine.json");

app.get("/", (req, res) => {
  res.send("Express server is running at http://localhost:3000");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const chefId = req.params.id;
  const singleChef = chefs.find((chef) => chef.id == chefId);
  res.send(singleChef);
});

app.get("/chefs/recipes/:id", (req, res) => {
  const chefId = req.params.id;
  const chefRecipesIds = chefs.find((chef) => chef.id == chefId)?.num_recipes;
  const chefRecipes = recipes.filter((recipe) =>
    chefRecipesIds?.includes(recipe.recipe_id)
  );
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
