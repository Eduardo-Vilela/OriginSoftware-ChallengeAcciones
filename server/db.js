const mysql = require('mysql');


const db = mysql.createPool({
    connectionLimit: 11,
    host: "localhost",
    user: "root",
    password: "",
    database: "challenge_action"
});
  
module.exports = db;