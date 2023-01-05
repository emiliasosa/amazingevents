const checkBoxContainer = document.getElementById('checkbox')

const checkFilter = data.events.map(event => event.category).flat().filter((category, index, array) => array.indexOf(category) === index)

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

renderCheckBox(checkFilter, checkBoxContainer)


let returnValueCheckBox = ()=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
    
    let cardsCheckBoxFilter = []

    checkbox.forEach(check=>{
        cardsCheckBoxFilter.push(data.events.filter(event => event.category === check.value))
    })
   
    let cardsFinal = cardsCheckBoxFilter.flat()

    if(cardsCheckBoxFilter.length > 0){
        render(renderCardsSearch(cardsFinal), "allEvents")
    }else{
        callEvents(data) 
    }
    
}

checkBoxContainer.addEventListener('change', returnValueCheckBox)



