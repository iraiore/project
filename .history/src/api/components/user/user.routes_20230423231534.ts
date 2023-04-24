import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRoutes {

    private router: Router = Router();

    private readonly controller: BaseController;

    constructor() {
        this.controller = new BaseController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.index);
        this.router.get('/info', this.controller.info);
        this.router.get('/sobre', this.controller.sobre)
    }

    public routes(): Router {
        return this.router;
    }
}