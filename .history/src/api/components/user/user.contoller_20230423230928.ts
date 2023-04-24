import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public list(req: Request, res: Response){
        const contatos = loadContatos();
        res.send(contatos);
        res.status(200);
    }

    public create(req: Request, res: Response) {
        let ok = true;
        let mensagem = "Contato salvo com sucesso!"

        const inputs = [
            {
            name: "nome",
            message: "A propriedade [nome] não deve estar indefinida/vazio!"
            },
            {
                name: "email",
                message: "A propriedade [email] não deve estar indefinida/vazio!"
            }
        ];

        const checkValidate = isValidateObjectRequest(req,inputs);
        console.log(checkValidate)

        
    }

}