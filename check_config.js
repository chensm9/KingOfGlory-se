const { readdirSync, copyFileSync } = require('fs');
const path = './src/config';
const configDir = readdirSync(path);
const configFiles = ['dev.js'];
for (const con of configFiles) {
  if (!(configDir.includes(con))) {
    console.log(`${con} not found, try copying ${con}.example to ${con}. You may modify the config next.`);
    copyFileSync(`${path}/${con}.example`, `${path}/${con}`);
  }
}