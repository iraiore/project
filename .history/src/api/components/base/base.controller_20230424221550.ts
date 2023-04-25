//Arquivo: base.controller.ts

import { Request, Response } from 'express';

export class BaseController {
    //retorna somente status 200 e a mensagem de Api runnig (Api rodando)
    public index(req: Request, res: Response) {
        res.status(200).json({message: 'Api running...'});
    }

    //retorna informações sobre a api

    public info(req: Request, res: Response) {
        res.status(200).json({
            name: 'Api REST - Finan360',
            mode: 'development',
            version: '1.0.0'
        });
    }

    public De(req: Request, res: Response) {
        res.status(200).json({
            nome: 'Pedro Yago',
            email: 'yagoiraiore@gmail.com',
            GitHub: 'github.com/iraiore'
        });
    }
}