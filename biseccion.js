//Función para comprobar si hay cambio de signo en el intervalo:
function CambioSigno(f,a,b){
    return f(a)*f(b)<0;
}


//Función valor absoluto:
function abs(x){
    if (x<0){
        return -x;
    }else{
        return x;
    }
}


//Función del método de la bisección:
function Biseccion(f,a,b,n){
    
    //Comprobar que hay un cambio de signo en el intervalo: si no hay cambio, no habrá ninguna raíz (o habrá más de una) y no se podrá aplicar el método.
    if(CambioSigno(f,a,b)==false){
        console.log("El método de bisección no es aplicable en este intervalo.");
        return null; // y salimos de la función sin devolver nada
    }

    //Si se puede aplicar el método, se lleva a cabo el siguiente bucle de los pasos:
    let medio; //definir el punto medio
    for(let i=0; i<n; i++){ //se repite como mucho n veces (indicadas por el  usuario) 
        medio=(a+b)/2; //calcular el punto medio
        let fMedio=f(medio); //calcular la imagen del punto medio

        //Si f(medio) es cero (o muy cercano), se ha encontrado la raíz:
        if(abs(fMedio)<1e-10){
            return medio;
            break; //en este caso, se termina aquí la función
        }

        //Si no se ha encontrado la raíz, decidir en qué subintervalo continuar:
        if(CambioSigno(f,a,medio)==true){
            b=medio; //si el cambio está en el intervalo [a,medio], cambiamos b por el medio
        }else{
            a=medio; //sino, estará en [medio,b] y cambiamos a por el medio
        }
    }
    console.log("No se ha podido encontrar ninguna buena aproximación con el método de bisección.");
    return medio; // Devolver la mejor aproximación de la raíz
}

//Ejemplos(se puede escribir también desde la propia consola):
const fun=x=>x**2-4*x;
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,-5,6,20)); //hay más de una raíz: no hay cambio de signo

const fun=x=>x**2-4*x;
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,1,3,100)); //no hay raíz en el intervalo: no hay cambio de signo

const fun=x=>x**3-4*x-9; //las funciones con la variable simbolica x se definen así con la flecha
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,2,3,20)); //devolver la raíz

const fun=x=>x**2-4*x;
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,-1,1,20)); //una raíz: x=0

const fun=x=>x**2-4*x;
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,1,5,20)); //una raíz: x=4

const fun=x=>x**2-4*x;
console.log("La raíz aproximada de la función ", fun, " es ", Biseccion(fun,-3,1,2)); //no hay suficientes pasos: devolver mensaje "no es una buena aproximación"



