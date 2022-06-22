function dos() {
    let resultado = (4 * 300)*0.90;
    return resultado;
  }
  
function cuatro() {
    let resultado = (12 * 300)*0.85;
    return resultado;
  }

function ocho() {
    let resultado = (24 * 300)*0.80;
    return resultado;
  }
  
function inicio() {
    let opcion = prompt("¡Bienvenido a Meta Movimiento! \nConocé los planes:\n 1. Pack x2 semanas\n 2. Pack x4 semanas\n 3. Pack x8 semanas\n 4. Siguiente paso");
    return opcion;
  }

function pago() {
    let opcion = prompt("Ahora que conoces todos los planes, elegí el que más te guste para saber el precio promocional \n 1. Pack x2 semanas\n 2. Pack x4 semanas\n 3. Pack x8 semanas\n 4. EXIT");
    return opcion;
  }


  
function metaMovimiento() {
    let plan = inicio();
    plan = parseInt(plan)

    while (plan !== 4) {
        switch (plan) {
            case 1:
                alert("El pack x2 semanas cuenta con 10% de descuento!\n- 2 clases por semana \n- Trabajaremos flexibilidad y aeróbico \n- El precio por clase es de $300");
                break;

            case 2:
                alert("El pack x4 semanas cuenta con 15% de descuento!\n- 3 clases por semana \n- Trabajaremos flexibilidad, resistencia, aeróbico y fuerza\n- El precio por clase es $300");
                break;
  
            case 3:
                alert("El pack x8 semanas cuenta con 20% de descuento!\n- 3 clases por semana \n- Trabajaremos flexibilidad, resistencia, aeróbico, fuerza y estabilidad \n- El precio por clase es $300");
                break;
  
            default:
                alert("Opcion no válida");
                break;
         }
        
         plan = inicio();
         plan = parseInt(plan)
    }

    let total = pago();
    total = parseFloat(total)

    while (total !== 4) {
        switch (total) {
            case 1:
                precio = dos()
                alert("El precio es: $" + precio)
                break;

            case 2:
                precio = cuatro()
                alert("El precio es: $" + precio)
                break;
  
            case 3:
                precio = ocho()
                alert("El precio es: $" + precio)
                break;
  
            default:
                alert("Opcion no válida");
                break;
         }
        
        total = pago();
        total = parseFloat(total)
    }
  }
  
  metaMovimiento();
  