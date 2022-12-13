    let modalWin = document.querySelector ('.button-first');
    let winUp = document.querySelector('.windows');
    let darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';

    modalWin.addEventListener ('click', () => {
        console.log('clicked!!!!');
        winUp.style.display = 'block';
    });