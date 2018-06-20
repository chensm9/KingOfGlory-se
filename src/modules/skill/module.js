import mysql from'./../../utils/mysqlUtil';

var getSkillInfoByHeroName = async (heroName) => {
  let mysqlOptions = {
    sql : 'select * from SkillInfo where belongTo = ?',
    args : [heroName]
  };
  var skills = await mysql.execQuery(mysqlOptions);
  return skills;
}

module.exports = {
  getSkillInfoByHeroName : getSkillInfoByHeroName
};