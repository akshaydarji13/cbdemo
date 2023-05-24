const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/items")

router.post("/", itemsController.saveItem);

router.get("/", itemsController.searchItems);

module.exports = router;