import dotenv from 'dotenv';
dotenv.config();

const VERSION: string = process.env.APP_VERSION || "1.0.0"
const PROTOCOL: string = process.env.APP_PROTOCOL || "http";
const NAME: string = process.env.APP_NAME || "JSX-Book"
const HOST: string = process.env.APP_HOST || "127.0.0.1";
const PORT: string | number = process.env.APP_PORT || 4000;
const NODE: string = process.env.NODE_ENV || "development";
const LOGS: string = process.env.LOG_LEVEL || "debug";
const TEST: boolean = NODE == "test";
const PROD: boolean = NODE == "production";
const DEV: boolean = NODE == "development";

const APP = {
  PROTOCOL,
  VERSION,
  NAME,
  HOST,
  PORT,
  NODE, 
  LOGS, 
  TEST,
  PROD,
  DEV
};

export default APP;
