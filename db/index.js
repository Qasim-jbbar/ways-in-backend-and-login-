const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION,
});

pool.connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error", e));

module.exports = pool;
