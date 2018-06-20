const mysql = require('mysql');
const config = require('./../config');

var connectionPool = mysql.createPool({
  'host' : config.db.host,
  'port':config.db.port,
  'user' : config.db.user,
  'password' : config.db.password,
  'database' : config.db.database,
  'charset': config.db.charset,
  'connectionLimit': config.db.connectionLimit,
  'supportBigNumbers': true,
  'bigNumberStrings': true
});

var release = connection => {
  connection.end(function(error) {
    if(error) {
      console.log('Connection closed failed.');
    } else {
      console.log('Connection closed succeeded.');
    }
  });
};

var execQuery = sqlOptions => {
  var results = new Promise((resolve, reject) => {
      connectionPool.getConnection((error,connection) => {
      if(error) {
        console.log("Get connection from mysql pool failed !");
        throw error;
      }

      var sql = sqlOptions['sql'];
      var args = sqlOptions['args'];

      if(!args) {
        var query = connection.query(sql, (error, results) => {
          if(error) {
            console.log('Execute query error !');
            throw error;
          }

          resolve(results);
        });
      } else {
        var query = connection.query(sql, args, function(error, results) {
          if(error) {
            console.log('Execute query error !');
            throw error;
          }

          resolve(results);
        });
      }

      connection.release(function(error) {
        if(error) {
          console.log('Mysql connection close failed !');
          throw error;
        }
      });
    });
  }).then(function (chunk) {
    return chunk;
  });

  return results;
};

module.exports = {
 release : release,
 execQuery : execQuery
}