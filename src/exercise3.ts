// Ejercicio 3

type SMS = {
    numero: number;
    mensaje: string;
};

type Email = {
    receptor: string;
    mensaje: string;
};

type Push = {
    esquina: string;
};

type Notificacion = SMS | Email | Push;

function enviarNotificacion(notificacion: Notificacion) {
    if ("numero" in notificacion) {
    console.log(`SMS a ${notificacion.numero}: ${notificacion.mensaje}`);
    } else if ("receptor" in notificacion) {
    console.log(`Email a ${notificacion.receptor}: ${notificacion.mensaje}`);
    } else {
    console.log(`Push en ${notificacion.esquina}`);
    }
}

console.log("Ejercicio 3:");
enviarNotificacion({ numero: 3001234567, mensaje: "Hola SMS" });
enviarNotificacion({ receptor: "krisgallego7@gmail.com", mensaje: "Hola Email" });
enviarNotificacion({ esquina: "Arriba a la dereha" });