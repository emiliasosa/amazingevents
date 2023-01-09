fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(res => (res.ok ? res.json() : Promise.reject(res)))
.then((res)=>{
    let detailContainer = document.getElementById("card-detail")

    let paramLocation = location.search
    let params = new URLSearchParams(paramLocation)
    let id = params.get("id")


    let filterOneCard = res.events.filter(card => card._id === id)

    let renderCard = (event, where)=>{
        let optionChanged = ""
        if(event.assistance){
            optionChanged = `<b>Assistance:</b> ${event.assistance}`
        }else if(event.estimate){
            optionChanged = `<b>Estimate:</b> ${event.estimate}`
        }
        
        where.innerHTML =  `
            <div class="details_container d-flex justify-content-around rounded" style="width: 50rem; height: 25rem;">
                <img src="${event.image}" class="card-img-top  detail-img rounded" alt="libros" title="libros">
                <div class="card-body">
                    <h5 class="card-title text-center fs-2 nav_color text-light"> ${event.name}</h5>
                    <p class="mt-3"><b>Date:</b> ${event.date}</p>
                    <p><b>Description:</b> ${event.description}</p>
                    <p><b>Category:</b> ${event.category}</p>
                    <p><b>Place:</b> ${event.place}</p>
                    <p><b>Capacity:</b> ${event.capacity}</p>
                    <p>${optionChanged}</p>
                    <p><b>Price:</b> ${event.price}</p>
                </div> 
            </div>
            `     
        
    }

    renderCard(filterOneCard[0], detailContainer)
})
