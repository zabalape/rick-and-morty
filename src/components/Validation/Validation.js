const validation =(userData)=>{

    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es valido'
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'El email ingresado no es valido'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'El password debe contener al menos un numero'
    }
    if(!userData.password.length < 6 ||userData.password.length >10){
        errors.password = 'El password debe contener entre 6 y 10 caracteres'
    }

    return errors;
};

export default validation;