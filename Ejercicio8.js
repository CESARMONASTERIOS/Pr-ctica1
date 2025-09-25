const tiempoSaludo = (callback) => {
    console.log('Hola soy Cesar.');
    callback();
}

tiempoSaludo(() => {
    setTimeout(() => {
        console.log('Espero que estes bien.');
    }, 2000);
});
