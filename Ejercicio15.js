// esta es la función con callback

function sumaCallback(a, b, callback) {
    setTimeout(() => {
        const resultado = a + b;
        if (resultado >= 0) {
            callback(resultado);
        } 
        else {
            callback("Error: el resultado es negativo");
        }
    }, 1000);
}

// Convertir el callback en una PROMESA

function sumaPromesa(a, b) {
    return new Promise((resolve, reject) => {
        sumaCallback(a, b, (error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}

// Usar la promesa con then, catch y finally

sumaPromesa(5, 3).then((resultado) => {
    console.log("callback", resultado);
    }).catch((error) => {
        console.log("callback", error);
    }).finally(() => {
        console.log("Operación finalizada");
    });