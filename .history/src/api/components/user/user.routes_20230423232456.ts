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
        this.router.get('/lista', this.controller.list);
        this.router.post('/create', this.controller.create);
        this.router.put('/create', this.controller.atualizar);
        this.router.post('/create', this.controller.create);
    }

    public routes(): Router {
        return this.router;
    }

}