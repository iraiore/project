//Arquivo responsável por registrar todas as rotas dos nossos componentes
import{ Router } from  'express';
import { BaseRoutes } from './base/base.routes';

export function registerRoutes(router: Router, prefix: string = ''): void {
    router.use(`${prefix}`, new BaseRoutes().routes())
}