const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model("unit", UnitSchema, "Units");