import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public input (req: Request, res: Response){
        res.status(201).json({
            const contatos = loadContatos();
            response.send
        });
    }

}