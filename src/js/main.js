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
    "Ser multiplanetarios será uno de los logros más importantes de la humanidad."
  ];

  function establecerFrase() {
    const fraseAleatoria = frasesElonMusk[Math.round(Math.random() * (frasesElonMusk.length-1))];
    document.querySelector("#frase").innerHTML = `<p>${fraseAleatoria}</p>`;
  }

  //establecerFrase();
