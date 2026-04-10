import { kv } from './string.ts';
function seperator() {
  console.info('#--------------------------------------------------------#');
}

function newline() {
  console.info('\n')
}


function information(app) {
  seperator();
  console.info(kv("App Name", app.server.get('app.name')));
  console.info(kv("App Version", app.server.get('app.version')));
  console.info(kv("App Protocol", app.server.get('app.protocol')));
  console.info(kv("App Host IP", app.server.get('app.host')));
  console.info(kv("App Port", app.server.get('app.port')));
  seperator();
}


const log = { seperator, newline, information }

export default log;
