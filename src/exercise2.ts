// Ejercicio 2
// { ingreso: 350000, egreso: 180000 }

type TipoTransaccion = "ingreso" | "egreso";

type Transaccion = {
    monto: number;
    tipo: TipoTransaccion;
    categoria: string;
};

function agruparTransacciones(transacciones: Transaccion[]) {
    return transacciones.reduce(
    (acc, cur) => {
        if (cur.tipo === "ingreso") {
        acc.ingreso += cur.monto;
        } else {
        acc.egreso += cur.monto;
        }
        return acc;
    },
    { ingreso: 0, egreso: 0 }
    );
}

const transacciones: Transaccion[] = [
    { monto: 100000, tipo: "ingreso", categoria: "salario" },
    { monto: 50000, tipo: "egreso", categoria: "comida" },
    { monto: 250000, tipo: "ingreso", categoria: "ropa" },
    { monto: 130000, tipo: "egreso", categoria: "arriendo" },
];

console.log("Ejercicio 2:", agruparTransacciones(transacciones));
