const mysql = require("mysql");

const koneksi = mysql.createConnection({
  host: "34.101.34.5", //"localhost",
  user: "root",
  password: "12345*",
  database: "database3",
});

koneksi.connect((err) => {
  // if (err) throw err;
  console.log("Mysql connected successfully");
});

module.exports = koneksi;
