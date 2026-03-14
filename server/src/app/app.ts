import express from 'express';
import config from '../config/application.ts';
import router from './routes/index.ts';

const application = { server: express() };

application.server.disable('x-powered-by');

config.plugins.forEach((plug) => {
  application.server.use(plug);
});

config.globals.forEach((glob) => {
  application.server.set(glob.key, glob.value);
});

application.server.use('/api', router);

application.server.use((err, req, res, next) => {
  if (err) {
    console.error(err)
    next(err);
  }
  next();
});


export default application;
