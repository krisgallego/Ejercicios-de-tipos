// Ejercicio 5

type Cambio = {
    tipo: "nombre" | "correo" | "password"
};

function resumenCambios(cambios: Cambio[]) {
    let resultado = {nombre: 0, correo: 0, password: 0,};

    cambios.forEach(c => {
        resultado[c.tipo]++;
    });

    return resultado;
}

const cambios: Cambio[] = [
    { tipo: "nombre" },
    { tipo: "correo" },
    { tipo: "nombre" },
    { tipo: "password" },
];

console.log(resumenCambios(cambios));