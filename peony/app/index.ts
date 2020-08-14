//const express = require('express');
//import * as express from "express";
//import * as helmet from "helmet";
//import * as cors from "cors";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import { TestService } from "./services/TestService";
import { ConTestDbService } from "./services/ConTestDbService";

const app = express();
//const bodyParser = require("body-parser");
//const app: express.Express = express()
//const port = 3002;
app.use(helmet());
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

const port = 8080;
//const router = express.Router();

app.get('/helloworld', (req: express.Request, res: express.Response) => {
//router.route('/').get((req: express.Request, res: express.Response) => {
    //return res.send('Hello World!!!')
    res.status(200).send({ message: 'Hello World!!!'})
});

app.get('/test', (req: express.Request, res: express.Response) => {
	const service = new TestService();
	service.test().then(result => res.status(200).send(result));
});

app.get('/conTestDb', (req: express.Request, res: express.Response) => {
	const service = new ConTestDbService();
	service.select().then(result => res.status(200).send(result));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
