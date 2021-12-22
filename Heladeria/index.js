var arrayBilletesDeClientes = [5, 5, 5, 10, 20];
var arrayDeBilletesAceptados = [5, 10, 20];
var saldoDeCaja = [];
var precioDelHelado = 5;
var saldoInicial = 0;
//const billetes: number[] = [];
var nuevoArrayDeBilletesIngresados = [];
var esAceptableElBillete = function (billeteDeCliente) {
    //return billeteDeCliente == 5 || billeteDeCliente == 10 || billeteDeCliente == 20 ? true : false
    var esBilleteAceptable = false;
    arrayDeBilletesAceptados.forEach(function (billete) {
        if (billeteDeCliente == billete) {
            esBilleteAceptable = true;
        }
    });
    return esBilleteAceptable;
};
var cajaApertura = function (billete) {
    saldoDeCaja.push(billete);
    saldoInicial += billete;
};
var comprarHelado = function (billete) {
    if (esAceptableElBillete(billete)) {
        cambioAlCliente(billete);
    }
};
var heladeria = function (arrayBilletesDeCliente) {
    if (arrayBilletesDeCliente === void 0) { arrayBilletesDeCliente = []; }
    arrayBilletesDeCliente.forEach(function (billete) {
        comprarHelado(billete);
    });
};
var saldoCaja = function () { return saldoDeCaja.reduce(function (billete, numero) { return billete + numero; }, 0); };
var devuelveCambio = function (billeteCliente) {
    var vueltoDelCliente = 0;
    return vueltoDelCliente = billeteCliente - precioDelHelado;
};
var cambioAlCliente = function (billete) {
    nuevoArrayDeBilletesIngresados.push(billete);
    if (billete == precioDelHelado) {
        cajaApertura(billete);
    }
    else {
        var cambio = devuelveCambio(billete);
        if (cambio > saldoCaja()) {
            console.log("[" + nuevoArrayDeBilletesIngresados + "] No es posible devolver cambio");
        }
        else {
            saldoCaja() - cambio;
            cajaApertura(billete);
            console.log("[" + nuevoArrayDeBilletesIngresados + "] Si es posible devolver cambio");
        }
    }
};
heladeria(arrayBilletesDeClientes);
