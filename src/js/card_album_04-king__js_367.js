const cardsRotate04 = [... document.querySelectorAll('.cardsRotate04')];

function startApp() {
    createData();
}
// obtener imagenes 
const createData = async() => {
        try {
            let endpoint = 'http://127.0.0.1:5500/peliculas.json';
    
            const resp = await fetch(endpoint,{
                method:"GET",
                headers:{
                    Accept: "application/json"
                }
            })
            const jsonData = await resp.json();
            const seeData = mostrarCategorias(jsonData);

            return seeData;
        } catch (error) {
            console.log('error============:', error);
            return 'No dato';
        }
    }
    
    function mostrarCategorias(dataCategorias = []) {
        console.log(dataCategorias);
        cardsRotate04.forEach(( element, index, arr )=>{ 
            const { description, name, imagen4 } = dataCategorias[index]; 
            const cardItem= cardsRotate04[index];
            cardItem.children[0].style.background= `url("${imagen4}") center/cover no-repeat`;
            cardItem.children[1].style.background= `url("${imagen4}") center/cover no-repeat`;
            
            if (cardItem.children[0].children[0].classList.contains('cardRotate04__paragraph__title')){
                cardItem.children[0].children[0].innerText= name;
            }
            if (cardItem.children[1].children[0].classList.contains('cardRotate04__paragraph__content')){
                cardItem.children[1].children[0].innerText= description; 
            }

         });
    }

document.addEventListener('DOMContentLoaded', startApp);
