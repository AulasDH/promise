async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  })
}

// essa funcao deve demorar 2 segundos
// essa funcao deve somar dois valores e retornar o valor
function somar(a, b) {

}

// essa funcao deve multiplicar dois valores e retornar o valor
function multiplicar() {

}

function main() {
  const resultado = somar(2, 3);

  // @todo pegar o resultado e multiplicar por 3
  multiplicar()

  // @todo imprimir resultado final
}

main();