import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm';


//Variables y constantes generales

const frasesElonMusk = [
  "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades no están a tu favor.",
  "El fracaso es una opción aquí. Si las cosas no están fallando, no estás innovando lo suficiente.",
  "Creo que es posible que la gente común elija ser extraordinaria.",
  "El camino hacia el éxito está pavimentado con toneladas de fracasos.",
  "No creo que la inteligencia artificial nos odie, pero si le importa un comino sobre nosotros, eso será un problema.",
  "Si algo es lo suficientemente importante, deberías intentarlo, incluso si el resultado probable es el fracaso.",
  "Creo que es importante tener un futuro que inspire y que sea emocionante. Hay que querer vivirlo.",
  "Trabaja como si tu vida dependiera de ello. En realidad, así es.",
  "Es muy importante gustarte lo que haces. Si te gusta lo que haces, pensarás en ello incluso cuando no estés trabajando.",
  "Quiero morir en Marte, pero no en el impacto.",
  "Ser multiplanetarios será uno de los logros más importantes de la humanidad.",
  "El éxito es incierto, pero la diversión está garantizada.",
];

let opcionesTimeline = {

  language: 'es',
  default_bg_color: { r: 17, g: 17, b: 17 },

}



//Funcion para generar frase aleatoria
const establecerFrase = () => {
  let quote = document.querySelector("#quote");
  const fraseAleatoria = frasesElonMusk[Math.round(Math.random() * (frasesElonMusk.length - 1))];
  if (quote != null) {
    document.querySelector("#quote").innerHTML = `<p>${fraseAleatoria} - Elon Musk</p>`;
  }
}

//Funcion para generar timeline cuando accedemos a biografia
const generarTimeline = () => {
  if (document.querySelector("#timeline-embed") != null) {
    timeline = new Timeline.Timeline('timeline-embed',
      'https://docs.google.com/spreadsheets/d/1vEBkcKDPjtCtri0WLjvWcgUuTgCQ8BI_tztBWVBa638/edit?gid=0#gid=0', opcionesTimeline);
  }
}

//Llamada a funciones

establecerFrase();

generarTimeline();


//Insercion de la barra inferior en header

const paginas = ["inicio", "biografia", "galeria", "contacto", "logros"];

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


const lightbox = new PhotoSwipeLightbox({
  gallery: '#galeria',
  children: 'a',
  pswpModule: () => import('photoswipe'),

});
lightbox.init();