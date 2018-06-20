import mysql from'./../../utils/mysqlUtil';

var getAllRuneInfo = async () => {
  let mysqlOptions = {
    sql : 'select * from RuneInfo'
  };
  var runes = await mysql.execQuery(mysqlOptions);
  return runes;
};

var getRuneInfoByName = async (name) => {
  let mysqlOptions = {
    sql : 'select * from RuneInfo where name = ?',
    args : [name]
  };
  var rune = await mysql.execQuery(mysqlOptions);
  return rune;
}

module.exports = {
  getAllRuneInfo : getAllRuneInfo,
  getRuneInfoByName : getRuneInfoByName
};