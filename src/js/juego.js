const respuestas = ["b", "c", "b", "b", "a", "a", "b", "c", "a", "b"];

document.querySelector("#enviarRespuestas").addEventListener("click",()=> {

    let i = 0;
    
let correctas = 0;

    for (const res of respuestas) {
        console.log(res);

        let respuesta = document.querySelector(`input[name="q${i+1}"]:checked`);

        let respuestaCorrecta = document.querySelector(`input[name="q${i+1}"][value="${res}"]`);

        divRespuesta = document.querySelector(`.q${i+1}`);

        if(respuesta == null){
            alert("Por favor responde todas las preguntas");
            let preguntas = document.querySelectorAll(".pregunta");

            for (const pr of preguntas) {
                pr.style.border = "2px solid #ddd";
                
                
            }
            return;
        }

        if(respuesta.value == res){
            correctas++;
            divRespuesta.style.border = "2px solid green";
            
            
        } else{

            divRespuesta.style.border = "2px solid red";
            

        }

        

        i++;
        
    }

    document.querySelector("#resultado").innerHTML=`Obtuviste ${correctas} respuestas correctas de 10`;

});