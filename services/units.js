const UnitModel = require("../models/unitsSchema");

const getUnitId = async (unitName) => {
  try {
    const unit = await UnitModel.findOne({ name: unitName });

    if (!unit) return null;

    return unit._id;
  } catch (err) {
    console.log("Error while fetching unit: ", err);
    throw err
  }
}

const saveUnit = async (unitName) => {
  try {
    const newUnit = new UnitModel({
      name: unitName
    })
  
    const savedUnit = await newUnit.save();
    
    return savedUnit._id;
  } catch(err) {
    console.log("Error while saving new unit: ", err);
    throw err;
  }
}

module.exports = {
  getUnitId,
  saveUnit
}