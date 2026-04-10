import { kv } from './string.ts';
const seperator = () => console.info('#--------------------------------------------------------#');
const newline = () => console.info('\n')
const listening = (app) => console.info(`# [MAIN] listening on ${app.protocol()}://${app.host()}:${app.port()}`);
function information(app) {
  seperator();
  console.info(kv("App Name", app.server.get('app.name')));
  console.info(kv("App Version", app.server.get('app.version')));
  console.info(kv("App Protocol", app.server.get('app.protocol')));
  console.info(kv("App Host IP", app.server.get('app.host')));
  console.info(kv("App Port", app.server.get('app.port')));
  seperator();
}


const log = { seperator, newline, listening, information }

export default log;
