import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public lista (req: Request, res: Response){
        res.status(200).json({

        });
    }

    public intput(req: Request)

}