// Ejercicio 7

type Producto = {
    categoria: "alimentos" | "tecnologia" | "papeleria";
    cantidad: number;
};

function bajo(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
        return producto.cantidad < 20;
    }

    if (producto.categoria === "tecnologia") {
        return producto.cantidad < 5;
    }

    return producto.cantidad < 50;
}

const productos: Producto[] = [
    { categoria: "alimentos", cantidad: 10 },
    { categoria: "alimentos", cantidad: 25 },
    { categoria: "tecnologia", cantidad: 3 },
    { categoria: "tecnologia", cantidad: 10 },
    { categoria: "papeleria", cantidad: 40 },
    { categoria: "papeleria", cantidad: 60 },
];

productos.forEach((producto) => {
    console.log(`Ejercicio 7: Categoría: ${producto.categoria} | Cantidad: ${producto.cantidad} - stock bajo: ${bajo(producto)}`);
});