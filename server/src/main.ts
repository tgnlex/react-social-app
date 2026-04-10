import app from './app/app.ts';
import log from './utils/logging.ts';
import { panic } from './utils/panic.ts';

function main() {
  log.newline();
  log.information(app);
  log.newline();
  app.server.listen(app.port(), (err) => {
    if (err) { panic(err) };
    log.seperator()
    log.listening(app);
    log.seperator();
    log.newline();
  });
}

main();
