const reservarUnidades: number = 30;
let TamanoCamion: number = 0;
const ArrayPaquetes: number[] = [];
const nuevoArray: number[] =[];

let paquete1: number = 0;
let paquete2: number = 0; 

let contador: number  = 1;
TamanoCamion = parseInt( window.prompt('Ingrese el tamaño del camion'));

do {

    let paquete  = parseInt( window.prompt(`ingrese el paquete ${contador}  a cargar`));
    ArrayPaquetes.push(paquete);
    contador++;    
    
} while (contador <= 5);


/**
 * Funciones para calcular el espacio
 */
const calcularEspacio = (tamanoCamion: number, reservarUnidades: number) => tamanoCamion - reservarUnidades
const calculaSumaNuevoArray = (nuevoArray: number[] ) => nuevoArray.reduce( (a, b) => a + b, 0);  


/**
 * Recoro el array para verificar los dos paquetes cumplan
 * con el espacio que solicita el ejercicio
 */
for (let i = 0; i < ArrayPaquetes.length-1; i++) {
    for (let j = i+1; j < ArrayPaquetes.length; j++) {
        if(ArrayPaquetes[i] != ArrayPaquetes[j]){
            if(( ArrayPaquetes[i] + ArrayPaquetes[j] ) == calcularEspacio(TamanoCamion, reservarUnidades)){
                paquete1 = ArrayPaquetes[i];
                paquete2 = ArrayPaquetes[j];
                nuevoArray.push(paquete1, paquete2);
                console.log('Tamaño del Camion => ', TamanoCamion);
                console.log('paquetes ingresado => ', ArrayPaquetes);
                console.log(`Resultado [${nuevoArray}] La suma de los paquetes es ${calculaSumaNuevoArray(nuevoArray)},\nlo que permite dejar las ${reservarUnidades} unidades de espacio requeridos ` + nuevoArray)
            }
        }else{
            console.log('No se puede escojer el mismo paquete dos veces')
        }
    }
}