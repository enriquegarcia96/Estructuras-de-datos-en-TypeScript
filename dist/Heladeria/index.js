"use strict";
const arrayBilletesDeClientes = [10, 20];
const arrayDeBilletesAceptados = [5, 10, 20];
const saldoDeCaja = [];
const precioDelHelado = 5;
let saldoInicial = 0;
//const billetes: number[] = [];
const nuevoArrayDeBilletesIngresados = [];
const esAceptableElBillete = (billeteDeCliente) => {
    //return billeteDeCliente == 5 || billeteDeCliente == 10 || billeteDeCliente == 20 ? true : false
    let esBilleteAceptable = false;
    arrayDeBilletesAceptados.forEach((billete) => {
        if (billeteDeCliente == billete) {
            esBilleteAceptable = true;
        }
    });
    return esBilleteAceptable;
};
const cajaApertura = (billete) => {
    saldoDeCaja.push(billete);
    saldoInicial += billete;
};
const comprarHelado = (billete) => {
    if (esAceptableElBillete(billete)) {
        cambioAlCliente(billete);
    }
};
const heladeria = (arrayBilletesDeClientes = []) => {
    arrayBilletesDeClientes.map((billete) => {
        comprarHelado(billete);
    });
};
const saldoCaja = () => saldoDeCaja.reduce((billete, numero) => billete + numero, 0);
const cambioAlCliente = (billete) => {
    if (billete == precioDelHelado) {
        cajaApertura(billete);
        nuevoArrayDeBilletesIngresados.push(billete);
    }
    else if (billete == 10 || billete == 20) {
        let saldoDisponible = 0;
        saldoDisponible = saldoCaja();
        if (saldoDisponible < 0) {
            console.log('no tenemos saldo para ese billete inicial');
        }
        else {
            billete - precioDelHelado;
            nuevoArrayDeBilletesIngresados.push(billete);
            console.log(`[${nuevoArrayDeBilletesIngresados}] Retorna S`);
        }
    }
};
heladeria(arrayBilletesDeClientes);
//# sourceMappingURL=index.js.map