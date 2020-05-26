//Make with https://www.youtube.com/watch?v=uUJr5Itz8kY&t=1404s
//https://www.youtube.com/watch?v=j3ixg2cPI54
//https://www.w3resource.com/javascript/form/email-validation.php

function validate() {
    if (userName.value.length < 3 && userName.value.length != 0) {
        messageError.push('El nombre debe tener al menos 3 caracteres')
        console.log('Nombre corto');
    } else if (userName.value === null || userName.value === '') {
        messageError.push('Complete el campo Nombre')
        console.log('Nombre sin completar');
    } else {
        console.log(userName.value);
    }
    if (lastName.value.length < 3 && lastName.value.length != 0) {
        messageError.push('El apellido debe tener al menos 3 caracteres')
        console.log('Nombre corto');
    } else if (lastName.value === null || lastName.value === '') {
        messageError.push('Complete el campo Apellido')
        console.log('Apellido sin completar');
    }
}

sendForm = function() {
    console.log("from");
    validate();
    error.innerHTML = messageError.join('<br>');
    return false;
}
window.onload = function() {
    userName = document.getElementById('name');
    lastName = document.getElementById('lastName');
    email = document.getElementById('email');
    age = document.getElementById('age');
    sex = document.getElementById('sex');
    error = document.getElementById('error');
    messageError = [];
    sendBtn = document.getElementById('send');
    sendBtn.onclick = sendForm
}