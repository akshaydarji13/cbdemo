require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbUser: process.env.DBUSER,
  dbPass: process.env.DBPASS,
  dbUrl: process.env.DBURL,
  dbName: process.env.DBNAME
}