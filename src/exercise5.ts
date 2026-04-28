// Ejercicio 5

type Cambio =
    | { tipo: "nombre" }
    | { tipo: "correo" }
    | { tipo: "password" };

function resumenCambios(cambios: Cambio[]) {
    return cambios.reduce(
        (acc, cur) => {
            acc[cur.tipo]++;
            return acc;
        }, 
        { nombre: 0, correo: 0, password: 0 }
    );
}

const cambios: Cambio[] = [
    { tipo: "nombre" },
    { tipo: "correo" },
    { tipo: "nombre" },
    { tipo: "password" },
    { tipo: "password" },
];

console.log("Ejercicio 5:", resumenCambios(cambios));