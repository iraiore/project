//Arquivo responsável por registrar todas as rotas dos nossos componentes
import{ Router } from  'express';
import { BaseRoutes } from './base/base.routes';
import { UserRoutes } from './user/user.routes';
import { DespesaRoutes } from './despesa/despesa.routes';

export function registerRoutes(router: Router, prefix: string = ''): void {
    router.use(`${prefix}`, new BaseRoutes().routes());
    router.use(`${prefix}`, new UserRoutes().routes());
    router.use(`${prefix}`, new DespesaRoutes().routes());
}
