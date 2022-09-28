// PRE-ENTREGA DEL PROYECTO FINAL

/*

Para hacer este programa me basé en la forma en la cual
se manejan en la empresa en la que trabajo para calcular los sueldos, 
sumando el sueldo base mas la comisión del total de las ventas que el empleado genera al mes.


º Si el empleado supera los 200000 del total de ventas, se le sumara un 25% al sueldo base.
º Si el empleado supera los 100000 pero no los 20000 del total de ventas, se le sumara un 10% al sueldo base.
º Si el empleado supera los 50000 del total de ventas, se le sumara un 2% al sueldo base.

*/

let ingresaVenta = true;
let importeVenta = 0;
let totalVentas = 0;
let totalAcumulado = 0;
let sueldoBase = 0;

sueldoBase = parseInt(prompt ('Ingresar sueldo basico:'));

while(ingresaVenta !== false){
    importeVenta = parseInt(prompt ('Ingrese importe $ venta:'));

    // Total calculado de ventas.
    totalVentas = totalVentas + importeVenta

    ingresaVenta = confirm("¿Deseas ingresar una nueva venta?"); //Esto va a validar si aceptas ingresar una nueva venta, sino corta.
}

if(totalVentas > 200000){
    totalAcumulado = sueldoBase + ((totalVentas * 25) / 100)
} else if (totalVentas >= 100000 && totalVentas < 200000){
    totalAcumulado = sueldoBase + ((totalVentas * 10) / 100)
} else if (totalVentas >= 50000 && totalVentas < 100000){
    totalAcumulado = sueldoBase + ((totalVentas * 2) / 100)
}

alert('El sueldo correspondiente a las ventas realizadas es de $:' + parseInt(totalAcumulado))