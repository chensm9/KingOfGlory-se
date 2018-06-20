import mysql from'./../../utils/mysqlUtil';

var getAllEquipInfo = async () => {
  let mysqlOptions = {
    sql : 'select * from EquipInfo'
  };
  var equips = await mysql.execQuery(mysqlOptions);
  return equips;
};

var getEquipInfoByName = async (name) => {
  let mysqlOptions = {
    sql : 'select * from EquipInfo where name = ?',
    args : [name]
  };
  var equip = await mysql.execQuery(mysqlOptions);
  return equip;
}

module.exports = {
  getAllEquipInfo : getAllEquipInfo,
  getEquipInfoByName : getEquipInfoByName
};