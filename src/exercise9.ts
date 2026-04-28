// Ejercicio 9

type Unidad = "cm" | "m" | "km";

function convertir(valor: number, de: Unidad, a: Unidad) {
    let metros = valor;

    if (de === "cm") {
        metros = valor / 100;
    }

    if (de === "km") {
        metros = valor * 1000;
    }

    if (a === "cm") {
        return metros * 100;
    }

    if (a === "km") {
        return metros / 1000;
    }

    return metros;
}

const valor1 = 100;

const valor2 = 1;

const valor3 = 2;

console.log("Ejercicio 9:", convertir(valor1, "cm", "m"));
console.log("Ejercicio 9:", convertir(valor2, "km", "m")); 
console.log("Ejercicio 9:", convertir(valor3, "m", "cm"));