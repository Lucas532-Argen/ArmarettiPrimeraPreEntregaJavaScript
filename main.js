let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}





// const productos = [
//     { nombre: "NIKE AIR 97", precio: 1300 },
//     { nombre: "NIKE RUNNING TERRA ", precio: 1800 },
//     { nombre: "NIKE WINFLO 8NIKE WINFLO 8", precio: 3600 },
//     { nombre: "NIKE LOW-TOP", precio: 1800 },
//     { nombre: "NIKE BLAZER 97", precio: 3000 },
//     { nombre: "NIKE LEGEND ESENTIAL", precio: 2000 },
//     { nombre: "NIKE AIR ZOOM", precio: 2500 },
//     { nombre: "NIKE TERRA KING", precio: 1800 },
// ];


//   alert("Bienvenidos a NIKE SHOES! Crean tu Cuenta!")
//   let email = String(prompt("Ingrese su E-mail"))
//   let password = String(prompt("Ingrese Contraseña"))
//   alert("Cuenta Creada, con exito")




//let productoElegido = prompt("Ingrese el producto que quiere comprar");
//console.log( productos.find((producto) => producto.nombre === productoElegido ) );