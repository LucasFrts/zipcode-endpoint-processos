import { isValidZipcode } from "../validators/zipcode.js";
import { error, success  } from "../helpers/response.js";
import { addressFormat } from "../helpers/formats.js";
export const getZipcode = async (req, res) => {
    const zipcode = req.params.zipcode;
    
    if(!isValidZipcode(zipcode)){
        return res.status(400).json(error("Por favor, insira um cep válido com 8 digitos e apenas números."));
    }

    const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json`);

    if(response.ok){
        const data = await response.json();
        const address = addressFormat(data)
        return res.json(success("Endereço encontrado com sucesso!", address));
    }
    
    return res.status(400).json(error("Cep inválido, por favor insira um cep válido e tente novamente."))
}