// Variables
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const sendButton = document.getElementById('enviar');

// EventListeners
eventListeners();
function eventListeners() {
    // Functions will be triggered when the app is started
    document.addEventListener('DOMContentLoaded', startApp);
    // Form fields
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

// Functions
function startApp() {
    // Disable send button
    sendButton.disabled = true;
}
// Validate that the field is not empty
function validateField() {
    // Text length and not empty field is validated
    validateLength(this);
    if (this.type === 'email') {
        validateEmail(this);
    }
    let errors = document.querySelectorAll('.error');
    // If all the fields are not empty
    if(email !== '' && subject.value !== '' && message !== '') {
        // and there's no error class
        if (errors.length === 0) {
            // the send button is activated
            sendButton.disabled = false;
        }else {
            sendButton.disabled = true;
        }
    }
}  

function validateLength(field) {
    // if the field content length is greater than 0
    if (field.value.length > 0) {
        // the border bottom will turned green
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
        // if not
    }else {
        // will be turned red
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// This function validates that the email field contains @
function validateEmail(field) {
    const msg = field.value;
    if(msg.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}