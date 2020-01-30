// Variables
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const sendButton = document.getElementById('enviar');
const form = document.getElementById('enviar-mail');
const resetButton = document.getElementById('resetBtn');

// EventListeners
eventListeners();
function eventListeners() {
    // Functions will be triggered when the app is started
    document.addEventListener('DOMContentLoaded', startApp);
    // Form fields
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // When the send button is clicked
    sendButton.addEventListener('click', sendEmail);

    // Reset button
    resetButton.addEventListener('click', resetForm);
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

// When the email is sent
function sendEmail(e) {
    e.preventDefault();
    // The spinner gif is displayed when the email is being sent
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Create a img tag that contents a mail picture
    const sentPic = document.createElement('img');
    // the directory where the image is stored is given to the src attribute
    sentPic.src = 'img/mail.gif';
    sentPic.style.display = 'block'

    // Set time out to hide spinner and show mail pic
    setTimeout(function() {
        spinnerGif.remove();
        // the picture is added to the DOM
        document.querySelector('#loaders').appendChild(sentPic);
        //Another time out to remove the sent picture after 5s
        setTimeout(function() {
            sentPic.remove();
            // Reset form
            form.reset();

        }, 5000) 
    }, 3000);

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

// Reset form
function resetForm() {
    form.reset();
}