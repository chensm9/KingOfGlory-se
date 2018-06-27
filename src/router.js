import Router from 'koa-express-router';
import heroRtr from './modules/hero/router';
import equipRtr from './modules/equip/router';
import runeRtr from './modules/rune/router';
import skinRtr from './modules/skin/router';
import summonerRtr from './modules/summoner/router';
import skillRtr from './modules/skill/router';
import collocationRtr from './modules/collocation/router'

export default function setRoute(app) {
  const apiRtr = new Router({ prefix: '/api' });
  app.use(apiRtr.routes(false));
  apiRtr.use('/hero', heroRtr.routes())
        .use('/equip', equipRtr.routes())
        .use('/rune', runeRtr.routes())
        .use('/skin', skinRtr.routes())
        .use('/summoner', summonerRtr.routes())
        .use('/skill', skillRtr.routes())
        .use('/collocation', collocationRtr.routes())
}