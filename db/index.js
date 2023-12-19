const { Pool } = require("pg");
require("dotenv").config();

const Pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION,
});

Pool
  .connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error", e));


module.exports = Pool;