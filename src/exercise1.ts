// Ejericio 1

type TaskStatus = "pendiente" | "en_progreso" | "finalizada";

type Task = {   
    id: number;
    description: string;
    isComplete: boolean;
    status: TaskStatus
}

function getTaskProgressOrPending(tasks: Task[]) {
    return tasks.filter((task: Task) => task.status !== "finalizada")
}

const tareas: Task[] = [
    { id: 1, description: "Estudiar", isComplete: false, status: "pendiente" },
    { id: 2, description: "Trabajar", isComplete: true, status: "finalizada" },
    { id: 3, description: "Entrenar", isComplete: false, status: "en_progreso" },
];

console.log("Ejercicio 1:", getTaskProgressOrPending(tareas));