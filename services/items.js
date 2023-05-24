const ItemModel = require("../models/itemsSchema");

const saveItem = async (itemData) => {
  try {
    const newItem = new ItemModel(itemData)
  
    const savedItem = await newItem.save();
  
    return savedItem;
  } catch(err) {
    console.log("Error while saving new item: ", err);
    throw err
  }
}

const findItems = async (search) => {
  try {
    let items
    if (!search) {
      items = await ItemModel.find().populate('unit');

      return items;
    }
    
    items = await ItemModel.find({ name: {$regex: search, $options: 'i'} }).populate('unit');

    return items;
  } catch (err) {
    console.log("Error while fetching items: ", err);
    throw err
  }
}

module.exports = {
  saveItem,
  findItems
}