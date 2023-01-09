fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(res => (res.ok ? res.json() : Promise.reject(res)))
.then((res)=>{
    let callEvents = (data)=>{
        let all = document.getElementById("allEvents")
        all.innerHTML = ''
        for (let event of data.events){
                all.innerHTML += `
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


    callEvents(res) 
})
