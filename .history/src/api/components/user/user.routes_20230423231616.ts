import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRoutes {

    private router: Router = Router();

    private readonly controller: UserController;

    constructor() {
        this.controller = new UserController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.get('/info', this.controller.info);
        this.router.get('/sobre', this.controller.sobre)
    }

    public routes(): Router {
        return this.router;
    }

}