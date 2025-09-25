const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Primera promesa resuelta');
    }, 1000);
});
const promesa2 = (mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${mensaje} -> Segunda promesa resuelta`);
        }, 1000);
    });
};
promesa1.then((resultado1) => {
    return promesa2(resultado1);
}).then((resultado2) => {
    console.log(resultado2);
}).catch((error) => {
    console.error('Error en la cadena de promesas:', error);
}).finally(() => {
    console.log('Cadena de promesas finalizada');
});