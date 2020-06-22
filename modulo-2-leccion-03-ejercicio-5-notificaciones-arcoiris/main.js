let notificationMessage = document.querySelector('.div');
let headlineMessage = document.querySelector('.h1');
let paragraphMessage = document.querySelector('.p');

if (document.querySelector('.success')) {
    headlineMessage.innerHTML = 'CORRECTO';
    paragraphMessage.innerHTML = 'Los datos son correctos';
} else if (notificationMessage.querySelector('.error')) {
    headlineMessage.innerHTML = 'ERROR';
    paragraphMessage.innerHTML = 'Ha surgido un error';
} else if (notificationMessage.querySelector('.warning')) {
    headlineMessage.innerHTML = 'AVISO';
    paragraphMessage.innerHTML = 'Tenga cuidado';
}
