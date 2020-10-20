const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: ShadowRoot,
  database: 'uniondb'
});

module.exports = pool.promise();