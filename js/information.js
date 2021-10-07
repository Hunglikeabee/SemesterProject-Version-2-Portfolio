const theForm = document.querySelector(".form-container");

const fullName = document.querySelector("#fullname");
const phoneNumber = document.querySelector("#phone");
const eMail = document.querySelector("#email");
const checkBox = document.querySelector("#infoletter");
const textArea = document.querySelector("#textarea");
const sendButton = document.querySelector(".form__send-button")

const fullNameError = document.querySelector(".fullname__error-message");
const phoneNumberError = document.querySelector(".phone__error-message");
const eMailError = document.querySelector(".email__error-message");
const textAreaError = document.querySelector(".textarea__error-message");

const messageSendt = document.querySelector(".message-sendt");

fullName.addEventListener("focusout", () => {
    checkSendButton();
    checkFullNameFocusOut();
})

phoneNumber.addEventListener("focusout", () => {
    checkSendButton();
    checkPhoneNumberFocusOut();
})

eMail.addEventListener("focusout", () => {
    checkSendButton();
    checkEmailFocusOut();
})

textArea.addEventListener("focusout", () => {
    checkSendButton();
    checkTextAreaFocusOut();
})

fullName.addEventListener("keyup", () => {
    checkSendButton();
    checkFullName();
})

phoneNumber.addEventListener("keyup", () => {
    checkSendButton();
    checkPhoneNumber();
})

eMail.addEventListener("keyup", () => {
    checkSendButton();
    checkEmail();
})

textArea.addEventListener("keyup", () => {
    checkSendButton();
    checkTextArea();
})

function checkSendButton() {
    if(checkCorrectLength(fullName.value, 4) && validatePhone(phoneNumber.value) && validateEmail(eMail.value) && checkCorrectLength(textArea.value, 10)) {
        sendButton.disabled = false
    }
    else {
        messageSendt.innerHTML = "";
        sendButton.disabled = true
    }
}



function checkFullNameFocusOut() {
    if(checkCorrectLength(fullName.value, 4)) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }
}

function checkPhoneNumberFocusOut() {
    if(validatePhone(phoneNumber.value.trim())) {
        phoneNumberError.style.display = "none";
    }
    else {
        phoneNumberError.style.display = "block";
    }
}

function checkEmailFocusOut() {
    if(validateEmail(eMail.value)) {
        eMailError.style.display = "none";
    }
    else {
        eMailError.style.display = "block";
    }
}

function checkTextAreaFocusOut() {
    if(checkCorrectLength(textArea.value, 10)) {
        textAreaError.style.display = "none";
    }
    else {
        textAreaError.style.display = "block";
    }
}






function checkFullName() {
    if(checkCorrectLength(fullName.value, 4)) {
        fullNameError.style.display = "none";
    }
}

function checkPhoneNumber() {
    if(validatePhone(phoneNumber.value.trim())) {
        phoneNumberError.style.display = "none";
    }
}

function checkEmail() {
    if(validateEmail(eMail.value)) {
        eMailError.style.display = "none";
    }
}

function checkTextArea() {
    if(checkCorrectLength(textArea.value, 10)) {
        textAreaError.style.display = "none";
    }
}




sendButton.addEventListener("click", sendForm);

function sendForm(event) {
    event.preventDefault();
    messageSendt.style.display = "grid";
    messageSendt.innerHTML = "Message sendt!"
    sendButton.disabled = "true";
    theForm.reset();
}





/* Check field for correct length */

function checkCorrectLength(theText, theLength) {
    if(theText.trim().length > theLength) {
        return true;
    }
    else{
        return false;
    }
}


/* RegEX */

//Email
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

//Norwegian phone number
function validatePhone(phone) {
    const regEx = /^(0047|\+47|47)?[2-9]\d{7}$/;
    const patternMatches = regEx.test(phone);
    return patternMatches;
}