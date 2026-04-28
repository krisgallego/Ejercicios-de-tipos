// Ejercicio 10

type Pago =
    | { metodo: "tarjeta"; numero: string; cvv: string }
    | { metodo: "transferencia"; banco: string; cuenta: string }
    | { metodo: "efectivo" };

function validarPago(pago: Pago) {
    if (pago.metodo === "tarjeta") {
        return pago.numero !== "" && pago.cvv !== "";
    }

    if (pago.metodo === "transferencia") {
        return pago.banco !== "" && pago.cuenta !== "";
    }

    return true;
}

const pago1: Pago = {
  metodo: "tarjeta",
  numero: "123456",
  cvv: "123",
};

const pago2: Pago = {
  metodo: "tarjeta",
  numero: "",
  cvv: "",
};

const pago3: Pago = {
  metodo: "transferencia",
  banco: "Bancolombia",
  cuenta: "987654",
};

const pago4: Pago = {
  metodo: "efectivo",
};


console.log("Ejercicio 10:", validarPago(pago1)); 
console.log("Ejercicio 10:", validarPago(pago2)); 
console.log("Ejercicio 10:", validarPago(pago3)); 
console.log("Ejercicio 10:", validarPago(pago4))