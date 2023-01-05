const searchContainer = document.getElementById('search')

let returnValueSearch = (e) => {
    let cardsFilter = data.events.filter(event => {
        return event.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    })

    render(renderCardsSearch(cardsFilter), "allEvents")
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
                        <a href="./detail.html" class="btn btn-primary">See more..</a>
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





