import Router from 'koa-express-router';
const skinModule = require('./module.js');
const skinRtr = new Router();
skinRtr.get('/', async (ctx,next) => {
  ctx.body = await skinModule.getAllSkinInfo()
})
skinRtr.get('/*', async (ctx,next) => {
  var name = ctx.params[0]
  name = decodeURI(name)
  console.log("get skinname:", name)
  ctx.body = await skinModule.getSkinInfoByName(name)
});
export default skinRtr;