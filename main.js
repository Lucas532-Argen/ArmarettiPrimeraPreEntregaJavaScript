var Comprobante_de_domicilio = false
let Presenta_alguna_enfermedad = false
let Informe_Medico = false

function calcularPlan() {
  var edad = parseInt(prompt("Cual es tu edad?"));
  console.log("Tu edad es " + edad)

  var domicilio = parseInt(prompt("domicilio 1 o 2?"));

  var enfermedad = parseInt(prompt("enfermedad 3 o 4"));

  var informe = parseInt(prompt("informe 5 o 6"));

  if (domicilio === 1) {
    while (edad > 15) {
      if (edad > 60 && informe === 5) {
        alert("Tu Plan es + Avanzado")
        break
      }
      if (edad >= 15 && edad <= 40 && informe === 5) {
        alert("Tu plan es Intermedio")
        break
      }
      if (edad >= 10 && edad <= 100 && enfermedad === 3) {
        alert("Tu plan es Avanzado")
        break;
      }

    }
  } else {
    alert("Debe ingresar Domicilio")
  }
}



