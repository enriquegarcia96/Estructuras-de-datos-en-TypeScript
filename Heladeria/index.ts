const arrayBilletesDeClientes: number[] = [5,5,5,10,20];
const arrayDeBilletesAceptados: number[] = [5,10,20];
const saldoDeCaja: number[] = [];
const precioDelHelado: number = 5;

let saldoInicial: number = 0;
//const billetes: number[] = [];

const nuevoArrayDeBilletesIngresados: number[] = [];

const esAceptableElBillete = (billeteDeCliente: number): boolean => {
    //return billeteDeCliente == 5 || billeteDeCliente == 10 || billeteDeCliente == 20 ? true : false
    let esBilleteAceptable: boolean = false;
    arrayDeBilletesAceptados.forEach((billete) =>{
        if(billeteDeCliente == billete){
            esBilleteAceptable = true;
        }  
    })
    return esBilleteAceptable;
}

const cajaApertura = (billete: number) => {   
    saldoDeCaja.push(billete);
    saldoInicial += billete;
}

const comprarHelado = (billete: number) => {
    if (esAceptableElBillete(billete)) {   
        cambioAlCliente(billete);
    }
}

const heladeria = (arrayBilletesDeCliente: number[] = []) => {
    arrayBilletesDeCliente.forEach((billete)=>{
        comprarHelado(billete);
    })
}


const saldoCaja  = (): number => saldoDeCaja.reduce((billete, numero) => billete + numero,0);

const devuelveCambio = ( billeteCliente: number ): number => {
    let vueltoDelCliente: number =0;
    return vueltoDelCliente = billeteCliente - precioDelHelado;
}

const cambioAlCliente = (billete: number) => {
    nuevoArrayDeBilletesIngresados.push(billete);

    if(billete == precioDelHelado){
        cajaApertura(billete);
    }else{
        let cambio = devuelveCambio(billete);
        if( cambio > saldoCaja() ){
            console.log(`[${nuevoArrayDeBilletesIngresados}] No es posible devolver cambio`);
        }else{
            saldoCaja() - cambio;
            cajaApertura(billete);
            console.log(`[${nuevoArrayDeBilletesIngresados}] Si es posible devolver cambio`);
        }
    }
}

heladeria(arrayBilletesDeClientes);
