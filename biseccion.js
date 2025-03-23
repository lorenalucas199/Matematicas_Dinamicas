// Función auxiliar para comprobar si hay cambio de signo en el intervalo
function CambioSigno(f, a, b) {
    return f(a) * f(b) < 0;
}

//Función valor absoluto
function abs(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
}

// Función principal que implementa el método de la bisección
function Biseccion(f, a, b, n) {
    // Comprobar que hay un cambio de signo en el intervalo
    if (CambioSigno(f, a, b)==False) {
        console.log("El método de bisección no es aplicable en este intervalo.");
        return null;
    }

    let medio;
    for (let i = 0; i < n; i++) {
        medio = (a + b) / 2; // Calcular el punto medio
        let fMedio = f(medio);

        // Si f(medio) es cero (o muy cercano), se ha encontrado la raíz
        if (abs(fMedio) < 1e-10) {
            return medio;
            break;
        }

        // Decidir en qué subintervalo continuar
        if (CambioSigno(f, a, medio)==True) {
            b = medio;
        } else {
            a = medio;
        }
    }
    return medio; // Devolver la mejor aproximación de la raíz
}

// Ejemplo de uso
const fun= x**3 - 4 * x - 9; // f(x) = x^3 - 4x - 9
let raiz = Biseccion(funcionEjemplo, 2, 3, 20);
console.log("Aproximación de la raíz:", raiz);
console.log(Biseccion(funcionEjemplo, 2, 3, 20));
