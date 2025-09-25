x = [43,36,7,72,8,1,8,1,643,63]

const mayMen = (array) => {
    let resp = { mayor: array[0], menor: array[0] }
    for (let i = 1; i < array.length; i++) {
        if (array[i] > resp.mayor) {
            resp.mayor = array[i]
        }
        if (array[i] < resp.menor) {
            resp.menor = array[i]
        }
    }
    return resp
}

console.log(mayMen(x))
