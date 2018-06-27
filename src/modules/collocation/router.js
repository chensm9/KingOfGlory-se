import Router from 'koa-express-router';
const collationModule = require('./module.js');
const collationRtr = new Router();
collationRtr.post('/', async (ctx, next) => {
  let data = ctx.request.body;
  console.log("get collation by name:", data.hero);
  ctx.body = await collationModule.getCollationByName(data.hero);
})
export default collationRtr;