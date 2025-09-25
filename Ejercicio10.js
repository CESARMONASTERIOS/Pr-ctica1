/*function saludar(nombre, callback) {
  console.log('Hola ' + nombre);
  callback();
}

saludar('Cesar', () => {
    console.log('Callback ejecutado');
});
*/


const posiNega = new Promise((resolve, reject) => {
    let numero = -8;
    if (numero > 0) {
        resolve('el numero positivo');
    } else {
        reject('el numero es negativo');
    }
    });

posiNega.then((mensaje) => {
    console.log('Éxito:', mensaje);
}).catch((error) => {
    console.log('Error:', error);
}).finally(() => {
    console.log('Operación finalizada');
});