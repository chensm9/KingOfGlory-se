import Router from 'koa-express-router';
const skillModule = require('./module.js');
const skillRtr = new Router();
skillRtr.get('/*', async (ctx,next) => {
  var heroName = decodeURI(ctx.params[0])
  console.log("get skillname:", heroName)
  ctx.body = await skillModule.getSkillInfoByHeroName(heroName)
});
export default skillRtr;