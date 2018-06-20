import Router from 'koa-express-router';
const heroModule = require('./module.js');
const heroRtr = new Router();
heroRtr.get('/', async (ctx,next) => {
  ctx.body = await heroModule.getAllHeroInfo()
})
heroRtr.get('/*', async (ctx,next) => {
  var name = ctx.params[0]
  name = decodeURI(name)
  console.log("get heroname:", name)
  ctx.body = await heroModule.getHeroInfoByName(name)
});
export default heroRtr;