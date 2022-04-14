function buscarUsuario(cumpriuPromise) {
    let carregando = true;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cumpriuPromise) {
                console.log('Teste entrei')
                return resolve();
            }

            return reject();
        }, 500);
    }).then(() => {
        console.log('Teste');

        return 3;
    }).then((res) => {

    }).catch((error) => {
        console.error('Vixi, deu errado', error);
    }).finally(() => {
        console.log('Encerrando promise');
        carregando = false;
    });
}


buscarUsuario(true);