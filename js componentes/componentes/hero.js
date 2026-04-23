document.addEventListener("DOMContentLoaded",function(){

    const heroElement = document.querySelector(".hero-container")


    if (!heroElement) return;

        fetch("/views/componets/hero.html")
                // la respuesta la comvierte a texo plano 
            .then(response => response.text())

                // inserta el contenido  html dek navbar enn el contenedor correspondiente
            .then(data => {
                heroElement.innerHTML = data;

           
            })
            .catch(error => console.log("Error al cargar el hero", error));
            
    }

)