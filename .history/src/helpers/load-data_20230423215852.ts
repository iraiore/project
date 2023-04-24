import fs from 'fs';

const ARQUIVO = `${__dirname}/../storage/contatos.json`;

let contatos = Array();

function laodContatos() {
    console. log(ARQUIVO)

    if(!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));

    const data = fs.readFileSync(ARQUIVO);
    contatos = JSON.parse(data.toString)    
}