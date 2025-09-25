const parEImpar = () => {
  let x = [4, 15, 9, 7, 2, 3, 6, 41];
  let res = { pares: [], impares: [] };

  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      res.pares.push(x[i]);
    } else {
      res.impares.push(x[i]);
    }
  }

  return res;
};

console.log(parEImpar());