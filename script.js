function balancando(){

    const frase = document.getElementById('frase');
    const pirulito = document.getElementById('pirulito');
    const musica = document.getElementById('musica');

    frase.style.display = 'none';

    pirulito.classList.add('pirulito-dance');

    document.body.classList.add('confetes');

    musica.currentTime = 0;
    musica.play();

    setTimeout(() => {
        frase.style.display = 'block'

        pirulito.classList.remove('pirulito-dance');

        document.body.classList.remove('confetes');

        musica.pause();
    }, 8000);
}