const tiempoSaludo = (callback) => {
    callback();
}

tiempoSaludo(() => {
    setTimeout(() => {
        console.log('Exito!!!!');
    }, 3000);
});