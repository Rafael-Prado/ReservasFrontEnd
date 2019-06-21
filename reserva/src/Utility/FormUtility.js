export const convertStateToArrayOfFormObjects = (formObject) => {
    const formElementsArray = [];
    for (let key in formObject) {
        formElementsArray.push({
            id: key,
            config: formObject[key]
        });
    }
 
    return formElementsArray;
}

export const executeValidationAndReturnFormElement = (event, updatedReservaForm, id) => {
    let formElement = { ...updatedReservaForm[id] };
    formElement.value = id === 'dateOfBirth' ? event : event.target.value;
    formElement.touched = true;
 
    const validationResponse = checkValidity(formElement.value, formElement.validation);
 
    formElement.valid = validationResponse.isValid;
    formElement.errorMessage = validationResponse.errorMessage;
 
    return formElement;
}

const checkValidity = (value, validation) => {
    let validationObject = {
        isValid: true,
        errorMessage: ''
    };
 
    if (validation) {
        if (validation.required) {
            validationObject.isValid = value.trim() !== '';
            validationObject.errorMessage = validationObject.isValid ? '' : 'Campo Requerido';
        }
 
        // if (validationObject.isValid && validation.maxLength) {
        //     validationObject.isValid = value.length <= 60;
        //     validationObject.errorMessage = 'Campo não pode ser maior que 60 caracters';
        // }
 
        return validationObject;
    }
    else {
        return validationObject;
    }
}

export const countInvalidElements = (reservaForm) => {
    let countInvalidElements = 0;
    for (let element in reservaForm) {
        if (!reservaForm[element].valid) {
            countInvalidElements = countInvalidElements + 1;
            break;
        }
    }
    return countInvalidElements;
}