const wherePast = document.getElementById("pastEvents")

let cardPastFiltradas = data.events.filter(card => card.date < data.currentDate)

let renderCards = (data, where)=>{
    where.innerHTML = ''
    for (let event of data){
        where.innerHTML += `
        <div class="card m-4 cardTransition2" style="width: 20rem;">
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


const checkBoxContainer = document.getElementById('checkbox')
const searchContainer = document.getElementById('search')

const checkFilter = cardPastFiltradas.map(event => event.category).flat().filter((category, index, array) => array.indexOf(category) === index)

//Renderizo cada checkbox
let renderCheckBox = (array, where)=>{
    where.innerHTML = ''

    for(let check of array){
        where.innerHTML +=`
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="${check}">
                <label class="form-check-label text-light">${check}</label>
            </div>
        `
    }
}


let returnValueCheckBox = (array)=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
    
    let cardsCheckBoxFilter = []

    checkbox.forEach(check=>{
        cardsCheckBoxFilter.push(array.filter(event => event.category === check.value))
    })
   
    let cardsFinal = cardsCheckBoxFilter.flat()

    if(cardsCheckBoxFilter.length > 0){
        return cardsFinal
    }
    
}


let returnValueSearch = () => {
    let cardsFilter = cardPastFiltradas.filter(event => {
        return event.name.toLowerCase().startsWith(searchContainer.value.toLowerCase())
    })

    if(document.querySelectorAll('input[type="checkbox"]:checked').length == 0){
        render(renderCardsSearch(cardsFilter), "pastEvents")
    }else{
        return cardsFilter
    }
}



let renderCardsSearch = (array)=>{
    let template = ''

    if(array.length > 0){
        array.forEach(card => {
            template +=`
            <div class="card m-4 cardTransition" style="width: 20rem;">
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


let renderBoth = (where)=>{
    let search = returnValueSearch()
    let checkbox = returnValueCheckBox(search)

    render(renderCardsSearch(checkbox), "pastEvents")
    
}

renderCheckBox(checkFilter, checkBoxContainer)

checkBoxContainer.addEventListener('change', renderBoth)
searchContainer.addEventListener('input', renderBoth)