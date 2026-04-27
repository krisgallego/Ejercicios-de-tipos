// Ejercicio 4

type TipoCampo = "texto" | "numero" | "email";

type CampoFormulario = {
    nombre: string;
    tipo: TipoCampo;
    valor: string | number;
};

function validarCampos(campos: CampoFormulario[]): string[] {
    return campos
    .filter((campo) => {
        if (campo.tipo === "texto") return typeof campo.valor !== "string";
        if (campo.tipo === "numero") return typeof campo.valor !== "number";
        if (campo.tipo === "email") {
        return typeof campo.valor !== "string" || !campo.valor.includes("@");
        }
    })
    .map((campo) => campo.nombre);
}

const campos: CampoFormulario[] = [
    { nombre: "nombre", tipo: "texto", valor: "Alejo" },
    { nombre: "edad", tipo: "numero", valor: 20 },
    { nombre: "correo", tipo: "email", valor: "krisgallego.com" },
];

console.log("Ejercicio 4:", validarCampos(campos));