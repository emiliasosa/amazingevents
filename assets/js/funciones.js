let callEvents = (data, data2)=>{
    let template = ''
    for (let event of data.events){
        if(event.date.includes(data2)){
            template += `
            <div class="card m-4" style="width: 20rem;">
                <img src="${event.image}" class="card-img-top  h-img" alt="feria de comidas" title="feria de comidas">
                <div class="card-body">
                    <h5 class="card-title text-center">${event.name}</h5>
                    <p class="card-text text-center">${event.description}</p>
                    <div class="d-flex justify-content-between price_btn_bottom">
                        <p class="fs-5 txt_color_logo">Price: ${event.price}</p>
                        <a href="./detail.html" class="btn btn-primary">See more..</a>
                    </div>
                </div>
            </div>
            `
        }
    }
    return template
}

let callDetailEvents = (data, data2)=>{
    let template = ''
    for (let event of data.events) {
        if(event.category.includes(data2)){
            template += `
                <div class="details_container d-flex justify-content-around rounded" style="width: 50rem; height: 25rem;">
                    <img src="${event.image}" class="card-img-top  detail-img rounded" alt="libros" title="libros">
                    <div class="card-body">
                        <h5 class="card-title text-center fs-2 nav_color text-light">${event.name}</h5>
                        <p class="mt-3"><span>Date:</span>${event.date}</p>
                        <p><span>Description:</span>${event.description}</p>
                        <p><span>Category:</span>${event.category}</p>
                        <p><span>Place:</span>${event.place}</p>
                        <p><span>Capacity:</span>${event.capacity}</p>
                        <p><span>Estimate:</span>${event.estimate}</p>
                        <p><span>Price:</span>${event.price}</p>
                    </div> 
                </div>`
        }   
    }
    return template
}

let upcomingEvents = callEvents(data, 2022)
let pastEvents = callEvents(data, 2021)
let allEvents = callEvents(data, 20)
let foodFairEvents = callDetailEvents(data, 'Food Fair')
let museumEvents = callDetailEvents(data, 'Museum')
let costumePartyEvents = callDetailEvents(data, 'Costume Party')
let musicConcertEvents = callDetailEvents(data, 'Music Concert')
let raceEvents = callDetailEvents(data, 'Race')
let bookExchangeEvents = callDetailEvents(data, 'Book Exchange')
let cinemaEvents = callDetailEvents(data, 'Cinema')


console.log(pastEvents)
