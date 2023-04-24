//Arquivo responsável por registrar todas as rotas 
import{ Router } from  'express';
import { BaseRoutes } from './base/base.routes';

/**
 * Init component Routes
 * 
 * @param {Router} Router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
    router.use(`${prefix}`, new BaseRoutes().routes())
}