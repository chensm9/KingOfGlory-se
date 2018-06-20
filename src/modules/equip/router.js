import Router from 'koa-express-router';
const equipModule = require('./module.js');
const equipRtr = new Router();
equipRtr.get('/', async (ctx,next) => {
  ctx.body = await equipModule.getAllEquipInfo()
})
equipRtr.get('/*', async (ctx,next) => {
  var name = ctx.params[0]
  name = decodeURI(name)
  console.log("get equipname:", name)
  ctx.body = await equipModule.getEquipInfoByName(name)
});
export default equipRtr;