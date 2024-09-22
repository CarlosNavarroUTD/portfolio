// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar texto: ', err);
    });
}

// Función para enviar (abrir enlace)
function sendTo(type) {
    let url;
    switch(type) {
        case 'phone':
            url = 'https://wa.me/5216632058150';
            break;
        case 'email':
            url = 'mailto:sharlye0541@gmail.com';
            break;
        case 'linkedin':
            url = 'https://www.linkedin.com/in/carlos-navarro-huerta-350b13243/';
            break;
        default:
            console.error('Tipo de envío no reconocido');
            return;
    }
    window.open(url, '_blank');
}

// Agregar event listeners a los botones
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const sendButtons = document.querySelectorAll('.send-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-clipboard-text');
            copyToClipboard(textToCopy);
        });
    });

    sendButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sendType = button.getAttribute('data-type');
            sendTo(sendType);
        });
    });
});