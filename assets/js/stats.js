fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(res => (res.ok ? res.json() : Promise.reject(res)))
.then((res)=>{
    const tableContainer = document.getElementById("table-stats")
    const eventsArr = res.events

    let upcommingStats = eventsArr.filter(card => card.date > res.currentDate)
    let pastStats = eventsArr.filter(card => card.date < res.currentDate)

    let createTable = ()=>{
        tableContainer.innerHTML = `
            <table class="table table-bordered ">
                <tr>
                    <th colspan="3" class="ttl_spacing_table table-dark">EVENTS STATICS</th>
                </tr>
                <tbody>
                    <tr>
                        <td class="text-dark">Events with the highest percentage of attendance</td>
                        <td class="text-dark">Events with the lowest percentage of attendance</td>
                        <td class="text-dark">Event with larger capacity</td>
                    </tr>
                    ${returnMaxAttendance(returnStats(eventsArr))}
                    ${returnMinAttendance(returnStats(eventsArr))}
                    ${returnMaxCapacity(eventsArr)}
                    <tr>
                        <th colspan="3" class="ttl_spacing_table table-dark">UPCOMING EVENTS STATICS BY CATEGORY</th>
                    </tr>
                    <tr>
                        <td class="text-dark">Categories</td>
                        <td class="text-dark">Revenues</td>
                        <td class="text-dark">Percentage of attendance</td>
                    </tr>
                    ${renderStats(returnStats(upcommingStats))}
                    <tr>
                        <th colspan="3" class="ttl_spacing_table table-dark">PAST EVENTS STATICS BY CATEGORY</th>
                    </tr>
                    <tr>
                        <td class="text-dark">Categories</td>
                        <td class="text-dark">Revenues</td>
                        <td class="text-dark">Percentage of attendance</td>
                    </tr>
                    ${renderStats(returnStats(pastStats))}
                </tbody>
            </table>
        `
    }

    let returnMaxAttendance = (op)=>{
        let maxAttendance = (Math.max(...op.map(event => event.attendance)))
        let template = "";

        op.forEach(event =>{
            if(event.attendance.includes(maxAttendance)){
                template = `<td class="text-dark">${event.name} %${maxAttendance}</td>`
            }
        })
        
        return template
    }

    let returnMinAttendance = (op)=>{
        let minAttendance = (Math.min(...op.map(event => event.attendance)))
        let template = "";

        op.forEach(event =>{
            if(event.attendance.includes(minAttendance)){
                template = `<td class="text-dark">${event.name} %${minAttendance}</td>`
            }
        })
        
        return template
    }

    let returnMaxCapacity = (op)=>{
        let maxCapacity = (Math.max(...op.map(event => event.capacity)))
        let template;
        op.forEach(event =>{
            if(event.capacity === maxCapacity){
                template = `<td class="text-dark">${event.name} ${event.capacity}</td>`
            }
        })
        return template
    }

    let renderStats = (op)=>{
        let tableTr = "";
        op.forEach(event => {
            tableTr += `
                <tr>
                    <td class="text-dark">${event.category}</td>
                    <td class="text-dark">${event.revenues}</td>
                    <td class="text-dark">${event.attendance}</td>
                </tr>`
        })

        return tableTr
    }

    let returnStats = (op)=>{    
        let arrayStats = [];
        op.forEach(event => {
            arrayStats.push({ 
                        name: event.name,
                        category: event.category,
                        revenues: event.estimate ? event.estimate * event.price : event.assistance * event.price,
                        attendance: event.estimate ? (event.estimate * 100 / event.capacity).toFixed(2) : (event.assistance * 100 / event.capacity).toFixed(2)
            })
        })

        return arrayStats
    }

    createTable()
})
