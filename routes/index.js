const items = require("./items");

module.exports = (app) => {
  app.use('/items', items);
}