import app from './app/app.ts';
import log from './utils/logging.ts';

function main() {
  log.information(app);
    log.newline(); 

  
  app.server.listen(app.port(), (err) => {
    if (err) {
      // TODO: panic(err);
      console.error('Error', err);
    };
    
    console.info(`# [MAIN] listening on ${app.protocol()}://${app.host()}:${app.port()}`);


  });



}

main();
