import Router from 'koa-express-router';
const equipModule = require('./module.js');
const equipRtr = new Router();
equipRtr.get('/', async (ctx,next) => {
  ctx.body = await equipModule.getAllEquipInfo();
})
equipRtr.post('/*', async (ctx,next) => {
  let data = ctx.request.body;
  console.log("get equip by name:", data.equip);
  var equip = await equipModule.getEquipInfoByName(data.equip);
  var same_equip = await equipModule.getEquipInfoByCategory(equip.category);
  ctx.body = {
    equip: equip,
    same_equip: same_equip
  }
});
export default equipRtr;