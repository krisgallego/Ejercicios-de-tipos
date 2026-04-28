// Ejercicio 5

type Cambio = "nombre" | "correo" | "password";

function contar(cambios: Cambio[]) {
    let res = { nombre: 0, correo: 0, password: 0 };

    cambios.forEach(c => res[c]++);

    return res;
}

console.log("5:", contar(["nombre", "password", "nombre"]));
