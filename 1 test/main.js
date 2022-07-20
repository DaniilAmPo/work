var Error = "";
function validation(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('Surname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message');


    if(name.length > 40){
        Error += "Name is too long. ";
    } else if(name.length < 3){
        Error += "Name is too short. ";
    }

    if(surname.length > 40){
        Error += "Surname is too long. ";
    } else if(surname.length < 3){
        Error += "Surname is too short. ";
    }
    if(message.length > 255){
        Error += "Message is too long. ";
    } else if(message.length < 10){
        Error += "Message is too short. ";
    }

    if(email.length > 100){
        Error += "Email is too long. ";
    } else if(email.length < 9){
        Error += "Name is too short. ";
    }

    var CheckEmailValidate = validateEmail(email);
    if(CheckEmailValidate === false){
        Error += "Wrong email."
    }

    var CheckPhoneValidate = validatePhone(phone);
    if(CheckPhoneValidate === false){
        Error += "Wrong phone."
    }





    if(Error === ""){
        document.getElementById('Errors').textContent = "";
        console.log("Nice");
    }else {
        document.getElementById('Errors').textContent = Error;
        Error = "";
    }
}

function validateEmail(email)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(Phone)
{
    var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(Phone);
}



