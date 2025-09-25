let x =[1,4,7,89,9,2];

const recoVec = new Promise((resolve, reject)=>{
    for (let i=0; i<x.length; i++){
        
        if (x[i]<0)
            resolve('false');
        else
            reject('true');
    }
})

/*
recoVec.then((resp)=>{
    console.log(resp);
}).catch((res)=>{
    console.log(res);
}).finally(()=>{
    console.log('se verifico cada numero')
})
*/

async function verificarNumeros(){
    try {
        const resultado = await recoVec;
        console.log(resultado);
    }catch (error){
        console.log(error);
    }finally{
        console.log('se verifico cada numero');
    }
}

verificarNumeros();