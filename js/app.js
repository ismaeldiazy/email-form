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
}

// Functions
function startApp() {
    // Disable send button
    sendButton.disabled = true;
}