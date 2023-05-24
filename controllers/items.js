const unitsService = require("../services/units");
const itemsService = require("../services/items");

const saveItem = async (req, res) => {
  console.log("request received: ", req.body);
  if (!req.body.name || !req.body.unit) {
    res.status(400).send("Name and unit are required");
    return;
  }

  try {
    let unitId = await unitsService.getUnitId(req.body.unit);

    if (!unitId) {
      unitId = await unitsService.saveUnit(req.body.unit);
    }

    const itemData = {
      name: req.body.name,
      unit: unitId,
      quantity: req.body.quantity,
    }

    await itemsService.saveItem(itemData);

    res.status(200).send("Item saved successfully");
  } catch (err) {
    console.log("Error while saving item: ", err);
    res.status(500).send("Something went wrong while creating new record for item");
  }
}

const searchItems = async (req, res) => {
  console.log("request received: ", req.query);
  
  try {
    const searchResult = await itemsService.findItems(req.query.search);

    res.status(200)
    res.json({
      data: searchResult
    })
  } catch (err) {
    console.log("Error while searching items: ", err);
    res.status(500).send("Something went wrong while searching records for item");
  }
}

module.exports = {
  saveItem,
  searchItems
}