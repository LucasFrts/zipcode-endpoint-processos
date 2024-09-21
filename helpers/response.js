export const error = (message) =>{
    return {
        success:false,
        message
    };
}

export const success = (message, data = null) =>{
    return {
        success:true,
        message,
        data
    };
}