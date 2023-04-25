import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public list(req: Request, res: Response){
        const contatos = loadContatos();
        res.status(200).json(contatos);
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
            },
            {

            }
        ];

        const checkValidate = isValidateObjectRequest(req,inputs);
        
        console.log(checkValidate)

        if(Array.isArray(checkValidate)){
            ok = false;
            mensagem = checkValidate.join(',');
        }

        if(ok){
            saveContato(req.body)
        }

        res.send({
            sucess: ok,
            message: mensagem
        })
    }

    public update(req: Request, res: Response){
        res.status(200).json({
            update: 'FUNÇÃO UPDTATE',
        });
    }

    public delete(req: Request, res: Response){
        res.status(200).json({delete: 'FUNÇÃO DESTROY',
        });
    }
}