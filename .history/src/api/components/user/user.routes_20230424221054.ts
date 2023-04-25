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
        this.router.get('/list', this.controller.listar);
        this.router.post('/create', this.controller.criar);
        this.router.put('/update/:', this.controller.atualizar);
        this.router.delete('/delete', this.controller.excluir);
    }

    public routes(): Router {
        return this.router;
    }

}