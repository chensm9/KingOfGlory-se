import mysql from'./../../utils/mysqlUtil';

var getCollationByName = async (hero) => {
  let mysqlOptions = {
    sql : 'select * from CollocationInfo where belongTo = ?',
    args : [hero]
  };
  var data = await mysql.execQuery(mysqlOptions);
  return data;
}

module.exports = {
  getCollationByName : getCollationByName
};