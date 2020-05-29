function validate() {
    //Validate Name
    if (userName.value.length < 3 && userName.value.length != 0) {
        messageError.push('El nombre debe tener al menos 3 caracteres');
        console.log('Nombre corto');
    } else if (userName.value === null || userName.value === '') {
        messageError.push('Complete el campo Nombre');
        console.log('Nombre sin completar');
    } else {
        console.log("Nombre: " + userName.value);
    }
    //Validate Last Name
    if (lastName.value.length < 3 && lastName.value.length != 0) {
        messageError.push('El apellido debe tener al menos 3 caracteres');
        console.log('Apellido corto');
    } else if (lastName.value === null || lastName.value === '') {
        messageError.push('Complete el campo Apellido');
        console.log('Apellido sin completar');
    } else {
        console.log("Apellido: " + lastName.value);
    }
    //Validate Email
    //https://www.w3resource.com/javascript/form/email-validation.php
    //
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        console.log('Email: ' + email.value);
    } else {
        console.log('El Email no es valido');
        messageError.push('El Email no es valido');
    }
    //validate Age
    if (age.value < 0 || age.value >= 100 || age.value === null || age.value === '') {
        messageError.push('La edad tiene que ser entre 1 y 99');
        console.log('Edad no consistente');
    } else if (isNaN(age.value)) {
        messageError.push('La edad tiene que ser en numeros');
        console.log('Edad con letras');
    } else {
        console.log("Edad: " + age.value);
    }
    //Validate Sex
    if (!woman.checked && man.checked === false && otherSex.checked === false) {
        messageError.push('Tiene que elegir un sexo');
        console.log('sexo incompleto');
    } else if (woman.checked === true) {
        console.log("Sexo: " + woman.value);
    } else if (man.checked === true) {
        console.log("Sexo: " + man.value);
    } else {
        console.log("Sexo: " + otherSex.value);
    }
    //Validate interest
    if (music.checked === false && sport.checked === false && game.checked === false && technology.checked === false && otherInterest.checked === false) {
        messageError.push('Tiene que elegir un interes');
        console.log('Interes incompleto');
    }
    console.log("Interes: ")
    if (music.checked) {
        console.log("        " + music.value);
    }
    if (sport.checked) {
        console.log("        " + sport.value);
    }
    if (game.checked) {
        console.log("        " + game.value);
    }
    if (technology.checked) {
        console.log("        " + technology.value);
    }
    if (otherInterest.checked) {
        console.log("        " + otherInterest.value);
    }
    //Validate Select
    if (selected.selected) {
        console.log("debe seleccionar un país");
    } else if (argentina.selected) {
        console.log("País: argentina");
    } else if (chile.selected) {
        console.log("País: chile");
    } else if (brazil.selected) {
        console.log("País: brazil");
    } else if (uruguay.selected) {
        console.log("País: uruguay");
    }
}
sendForm = function() {
    console.clear();
    console.log("from");
    messageError = [];
    validate();
    //Clave
    error.innerHTML = '<p class = "error">' + messageError.join('</p> <p class = "error"> ') + '</p>';
    return false;
}
window.onload = function() {
        userName = document.getElementById('name');
        lastName = document.getElementById('lastName');
        email = document.getElementById('email');
        age = document.getElementById('age');
        //variables for sex
        woman = document.getElementById('woman');
        man = document.getElementById('man');
        otherSex = document.getElementById('otherSex');
        //variables for interest
        music = document.getElementById('music');
        sport = document.getElementById('sport');
        game = document.getElementById('game');
        technology = document.getElementById('technology');
        otherInterest = document.getElementById('otherInterest');
        //variables for select
        selected = document.getElementById('selected');
        argentina = document.getElementById('argentina');
        chile = document.getElementById('chile');
        brazil = document.getElementById('brazil');
        uruguay = document.getElementById('uruguay');
        //variables for message error
        error = document.getElementById('error');
        messageError = [];
        //variables for send form
        sendBtn = document.getElementById('send');
        sendBtn.onclick = sendForm;
    }
    //!select igual a select == false
    // select... select == true