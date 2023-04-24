//Arquivo resposável por conectar todas as partes da api

import express, { Application} from 'express';
import { initRoutes } from './api/routes';
import logger from 'morgan';

export class App {;
    private app: Application;
    private port: string | number;

    constructor(port: string | number){
        this.app = express();
        this.port = port();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware(): void {
        this.app.use(express.json());
        this.app.use (express.urleancoded({}))
    }
}