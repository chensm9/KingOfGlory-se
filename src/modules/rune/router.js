import Router from 'koa-express-router';
const runeModule = require('./module.js');
const runeRtr = new Router();
runeRtr.get('/', async (ctx,next) => {
  ctx.body = await runeModule.getAllRuneInfo()
})
runeRtr.get('/*', async (ctx,next) => {
  var name = ctx.params[0]
  name = decodeURI(name)
  console.log("get runename:", name)
  ctx.body = await runeModule.getRuneInfoByName(name)
});
export default runeRtr;