const reservas = [];  

function guardarReserva(habitacion, precio){
    let documento = prompt("Ingrese su DNI");
    let fechaIngreso = prompt("Ingrese la fecha de Ingreso (AAAA-MM-DD)");
    let fechaEgreso = prompt("Ingrese la fecha de Egreso (AAAA-MM-DD)");
    let diasTotales = calcularEstadia(fechaIngreso, fechaEgreso);
    let precioFinal = diasTotales * precio;
    reservas.push({dni: documento, habitacion: habitacion, precio: precioFinal, dias: diasTotales});
}

function calcularEstadia(fechaIngreso, fechaEgreso){
    let fIng = new Date(fechaIngreso).getTime();
    let fEgr = new Date(fechaEgreso).getTime();
    let diasTotales = (fEgr - fIng) / 86400000;
    return diasTotales;
}

function reservar(){
    salir = false;
    let opcion = prompt("Seleccione el tipo de habitacion: \n1 - Habitacion Simple (1 persona) - $5000\n2 - Habitacion Doble (2 camas) - $10000 \n3 - Habitacion Doble (Cama Matrimonial) - $12000");
    while (salir != true){
        switch (opcion){
            case "1":
                guardarReserva("simple", 5000);
                salir= true;
                break;
            case "2":
                guardarReserva("doble", 10000);
                salir= true;
                break;
            case "3":
                guardarReserva("matrimonial", 12000);
                salir= true;
                break;
            default:
                alert("Opcion no valida");
                opcion = prompt("Seleccione el tipo de habitacion: \n1 - Habitacion Simple (1 persona) - $5000\n2 - Habitacion Doble (2 camas) - $10000 \n3 - Habitacion Doble (Cama Matrimonial) - $12000");
                break;
    }
}
}

function verReserva(array){
    let dni = prompt("Ingrese su DNI");
    return array.find(el=>{ return el.dni == dni}) || null
}
alert("Bienvenido al Hotel Rex")
    let opcion = prompt("En que lo podemos ayudar?: \n1 - Reservar Habitacion. \n2 - Ver Reserva. \n3 - Salir.");
    while (opcion !="3"){
        switch (opcion){
            case "1":
                reservar();
                alert("Su reserva se ha registrado con exito");
                break;
            case "2":
                let reservado = verReserva(reservas);
                if (reservado != null){
                    alert("Ud ha reservado una habitacion: " + reservado.habitacion + "\nPor un total de: " + reservado.dias + " dias \nCon un costo final de: " + reservado.precio + " ARS.");
                }else{
                    alert("No hay reservas a su nombre");
                }
                
                break;
            case "3":
                alert("Gracias por visitar nuestro hotel");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        opcion = prompt("En que lo podemos ayudar?: \n1 - Reservar Habitacion. \n2 - Ver Reserva. \n3 - Salir.");
    }