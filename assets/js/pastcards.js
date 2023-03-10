let callEvents = (data)=>{
    let past = document.getElementById("pastEvents")
    past.innerHTML = ''
    for (let event of data.events){
        if(event.date.includes(2021)){
            past.innerHTML += `
            <div class="card m-4" style="width: 20rem;">
                <img src="${event.image}" class="card-img-top h-img" alt="feria de comidas" title="feria de comidas">
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
    return past
}

let pastEvents = callEvents(data)
