const router = require("express").Router();
const ingredientRoutes = require("./ingredients");

// Ingredient routes
router.use("/ingredients", ingredientRoutes);

module.exports = router;
