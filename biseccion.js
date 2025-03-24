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
    //Guardamos los extremos del intervalos para tener los originales porque se modificaran
    let a1=a;
    let b1=b;
    
    //Comprobar que hay un cambio de signo en el intervalo: si no hay cambio, no habrá ninguna raíz (o habrá más de una) y no se podrá aplicar el método.
    if(CambioSigno(f,a,b)==false){
        return console.log("Para la función ", f, " el método de bisección no es aplicable en el intervalo [", a, ", ", b, "]."); // y salimos de la función sin devolver nada
    }

    //Si se puede aplicar el método, se lleva a cabo el siguiente bucle de los pasos:
    let medio; //definir el punto medio
    for(let i=1; i<n+1; i++){ //se repite como mucho n veces (indicadas por el  usuario) 
        medio=(a+b)/2; //calcular el punto medio
        let fMedio=f(medio); //calcular la imagen del punto medio

        //Si f(medio) es cero (o muy cercano), se ha encontrado la raíz:
        if(abs(fMedio)<1e-10){
            return console.log("La raíz aproximada de la función ", f, " en el intervalo [", a1, ", ", b1, "]  es ", medio, " conseguida en ", i, " iteracciones del método de bisección."); //Devolver la raíz
            break; //en este caso, se termina aquí la función
        }

        //Si no se ha encontrado la raíz, decidir en qué subintervalo continuar:
        if(CambioSigno(f,a,medio)==true){
            b=medio; //si el cambio está en el intervalo [a,medio], cambiamos b por el medio
        }else{
            a=medio; //sino, estará en [medio,b] y cambiamos a por el medio
        }
    }
    //Si no se ha conseguido la raíz en ese intervalo, devolver el mensaje:
    return console.log("No se ha podido encontrar ninguna buena aproximación en ", n," iteraciones de la raíz de la función ", f, "en el con el intervalo [", a1, ", ", b1, "] con el método de bisección. Prueba con más iteracciones."); 
} 

//Ejemplos(se puede escribir también desde la propia consola):
const fun1=x=>x**2-4*x;
Biseccion(fun1,-5,6,20); //hay más de una raíz: no hay cambio de signo

Biseccion(fun1,1,3,100); //no hay raíz en el intervalo: no hay cambio de signo

const fun2=x=>x**3-4*x-9; //las funciones con la variable simbolica x se definen así con la flecha
Biseccion(fun2,2,3,1000); //devolver la raíz 

Biseccion(fun1,-1,1,20); //una raíz: x=0

Biseccion(fun1,1,5,20); //una raíz: x=4

Biseccion(fun1,-3,1,1); //no hay suficientes pasos: devolver mensaje "no es una buena aproximación"



