import dev from './dev';
const { NODE_ENV = 'dev' } = process.env;
Object.assign(process.env, { NODE_ENV });
const config = getConfig();
export default config;
export const port = config.port;
export const db = config.db;

function getConfig() {
  // Default NODE_ENV='dev'
  const map = { [NODE_ENV]: dev, dev };
  return map[NODE_ENV];
}