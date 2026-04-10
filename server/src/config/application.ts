import express from 'express';
import APP from './env.ts'

const BODY_PARSERS = [
  express.urlencoded({ extend: true }),
  express.json(),
  express.text(), 
  express.raw()
]

const PLUGINS = [
  ...BODY_PARSERS
]

const GLOBALS = [  
  /*** APP GLOBALS ***/
  { key: 'app.version', value: APP.VERSION},
  { key: 'app.protocol', value: 'http'},
  { key: 'app.name', value: APP.NAME },
  { key: 'app.host', value: APP.HOST },
  { key: 'app.port', value: Number(APP.PORT) },
  { key: 'app.log', value: APP.LOGS},
  { key: 'app.env', value: APP.NODE},
  { key: 'app.production', value: APP.PROD },
  { key: 'app.development', value: APP.DEV },
  { key: 'app.test', value: APP.TEST }

];

const config = {
  plugins: PLUGINS,
  globals: GLOBALS
}


export default config;



