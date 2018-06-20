import mysql from'./../../utils/mysqlUtil';

var getAllHeroInfo = async () => {
  let mysqlOptions = {
    sql : 'select name,price,role,type from HeroInfo'
  };
  var heros = await mysql.execQuery(mysqlOptions);
  return heros;
};

var getHeroInfoByName = async (name) => {
  let mysqlOptions = {
    sql : 'select * from HeroInfo where name = ?',
    args : [name]
  };
  var hero = await mysql.execQuery(mysqlOptions);
  return hero;
}

module.exports = {
  getAllHeroInfo : getAllHeroInfo,
  getHeroInfoByName : getHeroInfoByName
};