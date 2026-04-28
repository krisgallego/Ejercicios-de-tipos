// Ejercicio 8

type Usuario = {
  edad: number;
  activo: boolean;
  rol: "admin" | "editor" | "visitante";
};

function filtrar(arr: Usuario[]) {
  return arr.filter(usuario => usuario.edad >= 18 && usuario.activo && usuario.rol !== "visitante");
}

const usuarios: Usuario[] = [
  { edad: 19, activo: true, rol: "editor" },
  { edad: 25, activo: false, rol: "admin" },
  { edad: 30, activo: true, rol: "visitante" },
];

console.log("Ejercicio 8:", filtrar(usuarios));