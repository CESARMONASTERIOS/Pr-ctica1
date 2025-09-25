const miFuncion = (texto) => {
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (vocales.includes(letra)) {
      resultado[letra]++;
    }
  }

  return resultado;
};

let obj = miFuncion("euforiaaeoio");
console.log(obj);
