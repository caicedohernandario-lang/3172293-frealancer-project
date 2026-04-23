
    //containerSelector: un selector cssdonde van las cards 

    export async function loadCards(containerSelector, cardsIds = []) {
        
        const container = document.querySelector(containerSelector);
        if (!container) return;
            
        try {
            //Hacemos dos featch al mismo tiempo ,uno para la platilla de card y otro par los datos
            const[templaRes, dataRes] = await Promise.all([
                
                fetch("/views/componets/card.html"),
                fetch("/data/cards.json")
            ])
            const template = await templaRes.tex();
            const cards = await dataRes.json();

            //filtro por si se proporciona ID
            const filteredCards = cardsIds.length? cardsIds.filter(card => cardsIds.includes(card.id)) : cards; //Si no hay ID las muestra todas

            filteredCards.forEach(card =>{
                let html = template
                .replace("{{title}}", card.title)
                .replace("{{icon1}}", card.icon1)
                .replace("{{icon2}}", card.icon2)
                .replace("{{description}}", card.description)

                //Agregamos la card al contenedor del DOM
                container.innerHTML += html;
            })


        } catch (error) {
            console.log("Error cargando las cards",error)
        }
    }
