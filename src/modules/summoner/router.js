import Router from 'koa-express-router';
const summonerModule = require('./module.js');
const summonerRtr = new Router();
summonerRtr.get('/', async (ctx,next) => {
  ctx.body = await summonerModule.getAllSummonerInfo()
})
summonerRtr.get('/*', async (ctx,next) => {
  var name = ctx.params[0]
  name = decodeURI(name)
  console.log("get summonername:", name)
  ctx.body = await summonerModule.getSummonerInfoByName(name)
});
export default summonerRtr;