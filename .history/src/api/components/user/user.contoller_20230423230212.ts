import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public list(req: Request, res: Response){
        res.status(200),
        const contatos = loadContatos();
    }

    public create(req: Request, res: Response) {
        res.status(201).json({

        })
    }

}