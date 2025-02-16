const { Pool } = require("pg");


module.exports = new Pool({
  host: "localhost", 
  user: "postgres",
  database: "membersonly",
  password: "arsh",
  port: 5432 
});