function calcularCotizacion() {
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var anio = parseInt(document.getElementById("anio").value);
  
    var costoBase = 500; // Costo base del seguro
    var descuento = 0; // Descuento inicial
  
    // Verificar si el automóvil es de una marca específica
    if (marca.toLowerCase() === "chevrolet") {
      descuento = 50;
    }
  
    // Verificar si el automóvil es modelo anterior a 2010
    if (anio < 2010) {
      descuento += 100;
    }
  
    var cotizacion = costoBase - descuento;
  
    var result = document.getElementById("result");
    result.innerHTML = "La cotización para el automóvil " + marca + " " + modelo + " del año " + anio + " es: $" + cotizacion;
  }
  
  alert("result")