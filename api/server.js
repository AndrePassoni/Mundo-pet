const jsonServer = require('json-server');
const path = require('path');
const data = require("../server.json")

const server = jsonServer.create();
const router = jsonServer.router(data); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));
server.use(router);

module.exports = server;