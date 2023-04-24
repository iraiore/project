//Arquivo responsável por iniciar todas as rotas registradas no arquivo
import { Request, Response, Router} from 'express';
import { registerRoutes } from './components'; 

export function initRoutes(router: Router): void {
    const prefix: string = '/api/v1';

    registerRoutes(router, prefix);
}