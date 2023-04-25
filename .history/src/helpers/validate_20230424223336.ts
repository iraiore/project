/*function isValidateRequest(request: any, inputs: string[]) {
    if(inputs.length == 0)
        return false;

        for(let i = 0; i < inputs.length; i++) {
            if(request.body[inputs[i]] == undefined || request.body[inputs[i]] == "")
                return false;
        }
}*/

function isValidateObjectRequest(request: any, inputs: any[]) {
    let message = [];

    for(let i = 0; i < inputs.length; i++){
        if(request.body[inputs[i].name] == undefined || request.body[inputs[i].name] == ""||inputs[i]) {
            message.push(inputs[i].message);
        }
    }
    
    return message.length == 0 ? true : message;
}

export { /*isValidateRequest,*/ isValidateObjectRequest}