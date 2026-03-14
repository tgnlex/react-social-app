import application from './server/app.ts';

const VNUM = application.server.get('api.version');
const PROT = application.server.get('api.protocol');
const NAME = application.server.get('api.name');
const HOST = application.server.get('api.host');
const PORT = application.server.get('api.port');


function main() {

  application.server.listen(PORT, (err) => {
    if (err) {
      // TODO: panic(err);
      console.error('Error', err);
    };
    console.info('#--------------------------------------------------------#');
    console.info(`# [MAIN] ${NAME} listening on ${PROT}://${HOST}:${PORT}`);
    console.info(`# [MAIN] Version: ${VNUM}`);
    console.info('#--------------------------------------------------------#');
  });


}

main();
