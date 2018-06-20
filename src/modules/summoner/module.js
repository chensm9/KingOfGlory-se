import mysql from'./../../utils/mysqlUtil';

var getAllSummonerInfo = async () => {
  let mysqlOptions = {
    sql : 'select * from Summoner'
  };
  var Summoners = await mysql.execQuery(mysqlOptions);
  return Summoners;
};

var getSummonerInfoByName = async (name) => {
  let mysqlOptions = {
    sql : 'select * from Summoner where name = ?',
    args : [name]
  };
  var Summoner = await mysql.execQuery(mysqlOptions);
  return Summoner;
}

module.exports = {
  getAllSummonerInfo : getAllSummonerInfo,
  getSummonerInfoByName : getSummonerInfoByName
};