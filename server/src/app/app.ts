import { handleError } from './middleware/error-handlers.ts';
import Application from './modules/bootstrap.ts';
import express from 'express';
import config from '../config/application.ts';
import router from './routes/index.ts';

const application = new Application(config);
application.bootstrap();

application.server.disable('x-powered-by');


application.server.use('/api', router);


application.server.use(handleError);


export default application;
