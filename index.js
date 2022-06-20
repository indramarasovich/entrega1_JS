let opcion;

alert("Bienvenido a ¿Qué comemos hoy?");
let usuario = prompt("Elegí tu usuario: (1: Juliana; 2: Lucas)");

if(usuario == 1) {

    opcion = prompt("Hola Juliana! Ingresa un día de la semana (lunes a domingo) | para salir escribir EXIT: ");

    while(opcion != "EXIT") {
        switch(opcion) {
            case "lunes":
                alert("Hoy comes hamburguesas");
                break;
            case "martes":
                alert("Hoy comes panchos");
                break;
            case "miercoles":
                alert("Hoy comes empanadas");
                break;
            case "jueves":
                alert("Hoy comes pizzas");
                break;
            default:
                alert("viernes, sabado o domingo menú libre!")
                break;
        }
        opcion = prompt("Ingrese día de la semana (lunes a domingo)| para salir escribir EXIT");
    }
}else if(usuario == 2) {
    opcion = prompt("Hola Lucas! Ingrese día de la semana (lunes a domingo) | para salir escribir EXIT: ");

    while(opcion != "EXIT") {
        switch(opcion) {
            case "lunes":
                alert("Hoy comes sopa");
                break;
            case "martes":
                alert("Hoy comes ravioles");
                break;
            case "miercoles":
                alert("Hoy comes ensalada");
                break;
            case "jueves":
                alert("Hoy comes panchos");
                break;
            default:
                alert("viernes, sabado o domingo menú libre!")
                break;
        }
        opcion = prompt("Ingrese día de la semana (Lunes a Domingo) para salir escribir EXIT");
    }
}else {
    alert("No reconoce el usuario.")
}

    
