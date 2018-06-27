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
  return equip[0];
}

var getEquipInfoByCategory = async (category) => {
  let mysqlOptions = {
    sql : 'select * from EquipInfo where category = ?',
    args : [category]
  };
  var same_equip = await mysql.execQuery(mysqlOptions);
  return same_equip;
}

module.exports = {
  getAllEquipInfo : getAllEquipInfo,
  getEquipInfoByName : getEquipInfoByName,
  getEquipInfoByCategory : getEquipInfoByCategory,
};