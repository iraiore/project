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
        this.router.get('/user', this.controller.list);
        this.router.post('/user', this.controller.create);
        this.router.put('/user/:id', this.controller.update);
        this.router.delete('/delete/:id', this.controller.excluir);
    }

    public routes(): Router {
        return this.router;
    }

}