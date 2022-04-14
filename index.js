async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  })
}

const buscarUsuario = () => {
  return new Promise(async (resolve, reject) => {
    await sleep(2000);

    const idUsuario = 3;

    resolve(idUsuario);
  })
}

function buscarEmpresaPeloIdUsuario(idUsuario) {
  console.log(`Buscando empresa do usuario ${idUsuario}`);

  return 5;
}

function buscarCidadeDaEmpresa(idEmpresa) {
  console.log(`Buscando cidade da empresa ${idEmpresa}`);

  return 'São Paulo';
}

async function enviarSms() {
  return new Promise(async (resolve, reject) => {
    console.log('Enviando SMS');
    await sleep(500);
    resolve(true);
  });
}

async function main() {
  try {
    const idUsuario = await buscarUsuario('Gabriel');
    const idEmpresa = buscarEmpresaPeloIdUsuario(idUsuario);

    enviarSms()
      .then(() => console.log('SMS enviado com sucesso'))
      .catch(() => console.log('teste'));

    const cidade = buscarCidadeDaEmpresa(idEmpresa);

    console.log(`Buscando cidade da empresa: ${cidade}`);
  } catch (error) {
    console.log('Vixi, deu errado ai', error);
  } finally {
    console.log('Finalizei');
  }
}



main();

// function buscarUsuario() {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const idUsuario = 3;

//             console.log('Busquei Usuario');

//             resolve(idUsuario);
//         }, 500);
//     }).then((response) => {
//         console.log(`Buscando empresa do usuario ${response}`);

//         const idEmpresaDoUsuario = 5;

//         return idEmpresaDoUsuario
//     }).then((response) => {
//         console.log(`Buscando cidade da empresa ${response}`);
//     })
// }