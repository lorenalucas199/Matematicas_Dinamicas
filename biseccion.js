// Función auxiliar para comprobar si hay cambio de signo en el intervalo
function hayCambioDeSigno(f, a, b) {
    return f(a) * f(b) < 0;
}

// Función principal que implementa el método de la bisección
function Biseccion(f, a, b, n) {
    // Comprobar que hay un cambio de signo en el intervalo
    if (!hayCambioDeSigno(f, a, b)) {
        console.log("El método de bisección no es aplicable en este intervalo.");
        return null;
    }

    let medio;
    for (let i = 0; i < n; i++) {
        medio = (a + b) / 2; // Calcular el punto medio
        let fMedio = f(medio);

        console.log(`Iteración ${i + 1}: a=${a}, b=${b}, medio=${medio}, f(medio)=${fMedio}`);

        // Si f(medio) es cero (o muy cercano), se ha encontrado la raíz
        if (Math.abs(fMedio) < 1e-10) {
            return medio;
        }

        // Decidir en qué subintervalo continuar
        if (hayCambioDeSigno(f, a, medio)) {
            b = medio;
        } else {
            a = medio;
        }
    }
    return medio; // Devolver la mejor aproximación de la raíz
}

// Ejemplo de uso
const funcionEjemplo = x => Math.pow(x, 3) - 4 * x - 9; // f(x) = x^3 - 4x - 9
let raiz = Biseccion(funcionEjemplo, 2, 3, 20);
console.log("Aproximación de la raíz:", raiz);
