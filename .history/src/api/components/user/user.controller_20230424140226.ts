import { Request, Response, response } from 'express';
import { loadContatos, saveContato } from "../../../helpers/load-data"; 
import { isValidateObjectRequest } from "../../../helpers/validate"; 

export class UserController {

    public listar(req: Request, res: Response){
        res.status(200).json({
        const contatos = loadContatos();
        res.send(contatos);
        });
    }

    public criar(req: Request, res: Response) {
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

    public atualizar(req: Request, res: Response){
        res.status(200).json({
            UPDATE: 'FUNÇÃO UPDTATE',
        });
    }

    public excluir(req: Request, res: Response){
        res.status(200).json({
            DELETE: 'FUNÇÃO DELETE',
        });
    }
}