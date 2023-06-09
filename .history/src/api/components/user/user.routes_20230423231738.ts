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
        this.router.get('/create', this.controller.create);
    }

    public routes(): Router {
        return this.router;
    }

}