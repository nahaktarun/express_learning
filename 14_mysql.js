var mysql = require("mysql2");

// npm i mysql

// connection with mysql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tarun25211",
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to mysql database...");

  //   Writing query and getting the results
  //   1.show databases;
  // 2. create database: CREATE database countries;
  //   3. Create table:  CREATE TABLE countries.list_of_countries (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30))
  // 4. Check all values- SELECT * FROM countries.list_of_countries;
  //   5. Insert the values in table:INSERT INTO countries.list_of_countries (name) VALUES('INDIA');
  connection.query(
    "SELECT * FROM countries.list_of_countries",
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
