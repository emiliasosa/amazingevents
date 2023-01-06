const checkBoxContainer = document.getElementById('checkbox')
const searchContainer = document.getElementById('search')
const arrayEvents = data.events

const checkFilter = arrayEvents.map(event => event.category).filter((category, index, array) => array.indexOf(category) === index)

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

    checkbox.forEach(check=> cardsCheckBoxFilter.push(array.filter(event => event.category === check.value)))
   
    let cardsFinal = cardsCheckBoxFilter.flat()

    if(cardsCheckBoxFilter.length > 0){
        return cardsFinal
    } 
}

let returnValueSearch = () => {
    let cardsFilter = arrayEvents.filter(event => event.name.toLowerCase().startsWith(searchContainer.value.toLowerCase()))

    if(document.querySelectorAll('input[type="checkbox"]:checked').length == 0){
       render(renderCardsSearch(cardsFilter), "allEvents")
    }else{
        return cardsFilter
    }
}

let renderCardsSearch = (array)=>{
    let template = []

    array.forEach(card => {
        template.push(`
        <div class="card m-4 cardTransition" style="width: 20rem;">
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
        `) 
    })


    if(array.length > 0){
        // template.forEach(card =>  setTimeout(()=> {console.log(card)}, 2000))
        return template
    }else{
        return `<h2 class="fs-1 text-light">There's no match</h2>`
    }

    
}

let render = (template, where)=> document.getElementById(where).innerHTML = template


let renderBoth = ()=>{
    let search = returnValueSearch()
    let checkbox = returnValueCheckBox(search)

    render(renderCardsSearch(checkbox), "allEvents")
    
}

renderCheckBox(checkFilter, checkBoxContainer)
searchContainer.addEventListener('input', renderBoth)
checkBoxContainer.addEventListener('change', renderBoth)
