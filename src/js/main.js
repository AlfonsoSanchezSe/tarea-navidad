//Insercion de la barra inferior en header
console.log("Hola desde main.js");
const paginas = ["inicio", "biografia", "galeria", "contacto", "juego", "logros"];

for (const pag of paginas) {

  if (document.querySelector(`.${pag}`) != null) {

    for (const li of document.querySelector(".listaMenu").childNodes) {

      if (li.nodeName == "LI") {

        let a = li.childNodes[0]

        if (a.textContent.toLowerCase() == pag) {

          a.classList.add("actual");
          a.classList.remove("hvr-underline-from-center");
          break;

        }
      }
    }
  }
}



//Boton modo claro/oscuro
let body = document.querySelector("body");
let botonModo = document.querySelector("#switch");

cargarModo();

function guardarModo(valor) {

  localStorage.setItem("light", valor);

}


botonModo.addEventListener("change",()=> {
  
  if(botonModo.checked){
    body.classList.add("light");
  }else{
    body.classList.remove("light");
  }

  guardarModo(document.body.classList.contains("light"));

});

function cargarModo() {

  let modoClaro = localStorage.getItem("light");



  if (modoClaro == "false") {
    body.classList.remove("light");
    guardarModo("false");
    botonModo.checked = false;

  }else{
    body.classList.add("light");
    botonModo.checked = true;

  }

  
}