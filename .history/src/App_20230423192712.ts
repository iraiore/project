//Arquivo resposável por conectar todas as partes da api

import express, { Application} from 'express';
import { initRoutes } from './api/routes';
import logger from 'morgan';

export class App {;
    private app: Application;
    private port: string | number;

    constructor(port: string | number){
        this.app = express();
        this.port 
    }

}