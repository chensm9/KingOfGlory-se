import mysql from'./../../utils/mysqlUtil';

var getAllSkinInfo = async () => {
  let mysqlOptions = {
    sql : 'select * from SkinInfo'
  };
  var Skins = await mysql.execQuery(mysqlOptions);
  return Skins;
};

var getSkinInfoByName = async (name) => {
  let mysqlOptions = {
    sql : 'select * from SkinInfo where belongTo = ?',
    args : [name]
  };
  var Skin = await mysql.execQuery(mysqlOptions);
  return Skin;
}

module.exports = {
  getAllSkinInfo : getAllSkinInfo,
  getSkinInfoByName : getSkinInfoByName
};