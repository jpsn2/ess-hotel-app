import express, { Express, Request, Response } from 'express';
import reviews from './src/routes/reviews.routes';
import discount from './src/routes/discount.routes';
import atracoesroute from './src/routes/atracoes.routes';
//import fs from 'fs';

const app: Express = express();
const port =  3000;

var allowCrossDomain = (req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());

// example of componenet routers app.use('component', componentRouter);
// link das rotas pro backend
app.use('/reviews', reviews);
app.use('/discounts', discount)
app.use('/atracoes', atracoesroute);


app.get('/', (req: Request, res: Response, next: any) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
