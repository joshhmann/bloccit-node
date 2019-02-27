const express = require("express") // require express module and initialize app
const app = express();

module.exports = app; //export to pass it to node server in src/server.js

const appConfig = require("./config/main-config.js")
const routeConfig = require("./config/route-config.js")

appConfig.init(app, express);
routeConfig.init(app);
