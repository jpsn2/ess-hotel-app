"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviews_routes_1 = __importDefault(require("./src/routes/reviews.routes"));
const atracoes_routes_1 = __importDefault(require("./src/routes/atracoes.routes"));
//import fs from 'fs';
const app = (0, express_1.default)();
const port = 3000;
var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(express_1.default.json());
// example of componenet routers app.use('component', componentRouter);
// link das rotas pro backend
app.use('/reviews', reviews_routes_1.default);
app.use('/atracoes', atracoes_routes_1.default);
app.get('/', (req, res, next) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
