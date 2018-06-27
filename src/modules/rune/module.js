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

var getRuneJson = async (runeJson) => {
  var runes = [];
  for(var i in runeJson) {
    let mysqlOptions = {
      sql : 'select * from RuneInfo where name = ?',
      args : [runeJson[i]]
    };
    var res = await mysql.execQuery(mysqlOptions);
    runes.push(res[0]);
  }
  return runes;
}

module.exports = {
  getAllRuneInfo : getAllRuneInfo,
  getRuneInfoByName : getRuneInfoByName,
  getRuneJson: getRuneJson
};