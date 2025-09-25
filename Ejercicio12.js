function tarea1(cb) {
    setTimeout(() => {
        cb("Tarea 1 completada");
    }, 1000);
}
function tarea2(cb) {
    setTimeout(() => {
        cb("Tarea 2 completada");
    }, 1000);
}

tarea1((res1) => {
    console.log(res1);
    tarea2((res2) => {
        console.log(res2);
    });
});

function tarea1Promise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea 1 completada"), 1000);
    });
}
function tarea2Promise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea 2 completada"), 1000);
    });
}

async function ejecutar() {
    const r1 = await tarea1Promise();
    console.log(r1);
    const r2 = await tarea2Promise();
    console.log(r2);
}
ejecutar();