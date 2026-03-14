import express from 'express';


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
  /*** API GLOBALS ***/
  { key: 'api.version', value: '1.0.0' },
  { key: 'api.protocol', value: 'http' },
  { key: 'api.name', value: 'api-server' },
  { key: 'api.host', value: '127.0.0.1' },
  { key: 'api.port', value: 4000 },
  { key: 'api.log', value: 'debug' },
  { key: 'api.env', value: 'development' },
  /*** APP GLOBALS ***/
  { key: 'app.version', value: '1.0.0'},
  { key: 'app.protocol', value: 'http'},
  { key: 'app.name', value: 'react-app' },
  { key: 'app.host', value: '127.0.0.1' },
  { key: 'app.port', value: 3000 },
  { key: 'app.log', value: 'debug' },
  { key: 'app.env', value: 'development' },
];

const config = {
  plugins: PLUGINS,
  globals: GLOBALS
}


export default config;



