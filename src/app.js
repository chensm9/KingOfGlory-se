import Koa from 'koa';
import setRoute from './router';
const app = new Koa();
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
setRoute(app);
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
export default app;