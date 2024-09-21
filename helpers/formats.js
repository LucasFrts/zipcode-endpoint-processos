export const addressFormat = (apiResponse) => {
    return {
        cep:apiResponse.cep,
        logradouro:apiResponse.logradouro,
        bairro:apiResponse.bairro,
        cidade:apiResponse.localidade,
        estado:apiResponse.uf
    }
}