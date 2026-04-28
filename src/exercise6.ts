// Ejercicio 6

type Calificacion = {
    estudianteId: number;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
};

function promedioPorCategoria(arr: Calificacion[], id: number) {
    let res = {
        tareas: { total: 0, count: 0 },
        quices: { total: 0, count: 0 },
        examen: { total: 0, count: 0 },
    };

    arr.forEach(calificaciones => {
        if (calificaciones.estudianteId === id) {
            res[calificaciones.categoria].total += calificaciones.nota;
            res[calificaciones.categoria].count++;
        }
    });

    return {
        tareas: res.tareas.total / (res.tareas.count || 1),
        quices: res.quices.total / (res.quices.count || 1),
        examen: res.examen.total / (res.examen.count || 1),
    };
}

const calificaciones: Calificacion[] = [
    { estudianteId: 1, categoria: "tareas", nota: 3 },
    { estudianteId: 2, categoria: "tareas", nota: 5 },
    { estudianteId: 1, categoria: "quices", nota: 3 },
    { estudianteId: 2, categoria: "tareas", nota: 1 },
];

console.log("Ejercicio 6:", promedioPorCategoria(calificaciones, 1));