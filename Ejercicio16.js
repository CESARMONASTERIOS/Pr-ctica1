function suma(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a + b >= 0) {
        resolve(a + b);
      } else {
        reject("El resultado es negativo");
      }
    }, 1000);
  });
}
/*
// Uso con promesas
suma(5, 10).then(resultado => {
    console.log("Resultado:", resultado);
  }).catch(error => {
    console.log("Error:", error);
  }).finally(() => {
    console.log("Operación finalizada");
});
*/

// migrar una función con promesas a async/await
async function sumaAsync(a, b) {
  try {
    const resultado = await suma(a, b);
    console.log("Resultado:", resultado);
  } catch (error) {
    console.log("Error:", error);
  }
}

sumaAsync(5, 10);