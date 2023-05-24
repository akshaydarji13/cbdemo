const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  unit: { type: Schema.Types.ObjectId, ref: 'unit', required: true },
  createdAt: {type: Date, default: Date.now()},
  quantity: {type: Number, default: 0}
});

module.exports = mongoose.model("item", ItemSchema, "Items");