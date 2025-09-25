const verificacion = new Promise((resolve, reject) => {
    setTimeout (() =>{
        const exito  = true;
        if (exito){
            resolve('Datos recibidos correctamente');
        } 
        else {
            reject ('Error al recibir los datos');
        }
    }, 1000);
});

// para convertir una PROMISE en CALLBACK se les llama a los metodos
// then, catch y finally 

verificacion.then((mensaje) => {
    console.log('callback ', mensaje);
}).catch((error) => {
    console.log('callback', error);
}).finally(() => {
    console.log('Operación finalizada');
});