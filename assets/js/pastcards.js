const wherePast = document.getElementById("pastEvents")

let cardPastFiltradas = data.events.filter(card => card.date < data.currentDate)

let renderCards = (data, where)=>{
    where.innerHTML = ''
    for (let event of data){
        where.innerHTML += `
        <div class="card m-4" style="width: 20rem;">
            <img src="${event.image}" class="card-img-top h-img" alt="${event.name}" title="${event.name}">
            <div class="card-body">
                <h5 class="card-title text-center">${event.name}</h5>
                <p class="card-text text-center">${event.description}</p>
                <div class="d-flex justify-content-between price_btn_bottom">
                    <p class="fs-5 txt_color_logo">Price: ${event.price}</p>
                    <a href="./detail.html?id=${event._id}" class="btn btn-primary">See more..</a>
                </div>
            </div>
        </div>
        `     
    }
}

renderCards(cardPastFiltradas,wherePast)


const searchContainer = document.getElementById('search')

let returnValueSearch = (e) => {
    let cardsFilter = cardPastFiltradas.filter(event => event.name.toLowerCase().startsWith(e.target.value.toLowerCase()))

    render(renderCardsSearch(cardsFilter), "pastEvents")
}

let listenSearch = searchContainer.addEventListener('input', returnValueSearch)

let renderCardsSearch = (array)=>{
    let template = ''

    if(array.length > 0){
        array.forEach(card => {
            template +=`
            <div class="card m-4" style="width: 20rem;">
                <img src="${card.image}" class="card-img-top h-img" alt="${card.name}" title="${card.name}">
                <div class="card-body">
                    <h5 class="card-title text-center">${card.name}</h5>
                    <p class="card-text text-center">${card.description}</p>
                    <div class="d-flex justify-content-between price_btn_bottom">
                        <p class="fs-5 txt_color_logo">Price: ${card.price}</p>
                        <a href="./detail.html?id=${card._id}" class="btn btn-primary">See more..</a>
                    </div>
                </div>
            </div>
            `
        })
    }else{
        template = `<h2 class="fs-1 text-light">There's no match</h2>`
    }
    

    return template
}

let render = (template, where)=>{
    document.getElementById(where).innerHTML = template
}




let returnValueCheckBoxPast = ()=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
    
    let cardsCheckBoxFilter = []

    checkbox.forEach(check=>{
        cardsCheckBoxFilter.push(cardPastFiltradas.filter(event => event.category === check.value))
    })
   
    let cardsFinal = cardsCheckBoxFilter.flat()

    if(cardsCheckBoxFilter.length > 0){
        render(renderCardsSearch(cardsFinal), "pastEvents")
    }else{
        render(renderCardsSearch(cardPastFiltradas), "pastEvents") 
    }
    
}

checkBoxContainer.addEventListener('change', returnValueCheckBoxPast)