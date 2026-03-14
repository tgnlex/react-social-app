enum Protocol {
  HTTPS = "https",
  HTTP = "http",
  WS = "ws",
  WSS = "wss"
} 
/*** SERVER STATE  ***/
enum ServerState { ONLINE, OFFLINE }
/*** HTTP STATUS CODES ***/
enum Code {
  OK = 200,
  RED = 300,
  BAD = 400,
  ERR = 500,
}
enum LogLevel {
  DEBUG.
  INFO, 
  NOTE,
  WARN,
  ERROR,
  ALERT,
  FATAL
}


enum Ports { APP = 3000, API = 3000 };



enum Switch { OFF, ON };
enum Arrow { UP, RIGHT, DOWN, LEFT };


export { LogLevel,Arrow,  Switch, BP, Day, Ports,  }
