const cards = document.querySelectorAll('.content')

    for (let card of cards) {
        card.addEventListener("click", function(){
        const cardId = card.getAttribute("id");
        window.location.href = `/receita/${cardId}`
    })
}

const ingredientsList = document.querySelector('#ingredients_list')
const preparationList = document.querySelector('#preparation')
const informationList = document.querySelector('#information')


function ingrediente(){
    if(ingredientsList.classList.contains('hidden')){

        ingredientsList.classList.remove('hidden')
    }
    else{
        ingredientsList.classList.add('hidden')
    }
}

function preparation(){
    if(preparationList.classList.contains('hidden')){

        preparationList.classList.remove('hidden')
    }
    else{
        preparationList.classList.add('hidden')
    }
}

function information(){
    if(informationList.classList.contains('hidden')){

        informationList.classList.remove('hidden')
    }
    else{
        informationList.classList.add('hidden')
    }
}