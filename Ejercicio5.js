function miFuncion(cad) {
    let invertida = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        invertida = invertida + cad[i];
    }
    return cad === invertida;
}

let band = miFuncion("oruro");
console.log(band);

band = miFuncion("hola");
console.log(band);
