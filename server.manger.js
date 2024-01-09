const express = require("express");
const app = express();
class ServerManger {
  constructor(port) {
    this.port = port;
  }
  config(config) {
    const middlewares = config.middlewares;
    const routes = config.routes;
    if (!routes) {
      middlewares.map((middleware) => {
        app.use(middleware);
      });
    }
    if (!middlewares) {
      routes.map((route) => {
        app.use(route[0], route[1]);
      });
    }
    return this;
  }
  run() {
    app.listen(this.port, () => {
      console.log(`server[${this.port}] open`);
    });
  }
}

module.exports = ServerManger;
