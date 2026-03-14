import express, type{ Express } from 'express'
type KV = { key: string, value: string | number | boolean | null }



interface AppConfig {
  middleware: Function[]
  plugins: Function[];
  globals: KV[];
  /** Sub modules **/
  database?: any;
  queue?: any;
  cache?: any;
  logger?: any;

}

class Application {
  config: AppConfig;
  server: Express;
  cache: any; 
  tasks: any;
  log: any;
  db: any;
  
  #private submodules(config: AppConfig) {
    if (config.database) this.db = config.databasr;
    if (config.logger) this.log = config.logger;
    if (config.queue) this.tasks = config.queue;
    if (config.cache) this.cache = config.cache;
  }
  constructor(config: AppConfig) {
    this.submodules(this.config);
    this.server = express();
    this.config = config;
  }
  bootstrap() {
    const { plugins, globals } = this.config;
    plugins.forEach((plug) => { this.server.use(plug) });
    globals.forEach((g) => { this.server.set(g.key, g.value) };
  }
  serve(PORT) {
    return this.server.listen(PORT, () => {
      if (err) { panic() }
    }
  }
}
