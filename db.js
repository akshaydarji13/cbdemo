const mongoose = require('mongoose');
const config = require('./config')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPass}@${config.dbUrl}/${config.dbName}?retryWrites=true&w=majority`, {
      useNewUrlParser: true
    });

    console.log("DB connection successful")
  } catch (error) {
    console.log("Error while DB connection: ", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;