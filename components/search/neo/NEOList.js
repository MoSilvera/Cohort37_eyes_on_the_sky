import NEOComponent from "./NEO.js"
import nearEarthObjectsHandler from "../../../modules/nearEarthObjectsHandler.js"
import settings from "../../../modules/settings.js"

let eventTarget = document.querySelector("#eventHub")



const NEOList = (date) => {

        let currentDate = settings.formatDate(Date.now())

        nearEarthObjectsHandler.getByDate(currentDate)
            .then((res) => {
                let sizeArray = []
                res.near_earth_objects[currentDate].forEach(NEO => {
                    sizeArray.push(NEO.estimated_diameter.feet.estimated_diameter_max)
                });
                let sortedArray = sizeArray.sort((a, b) => b - a)
                return sortedArray
            })
            .then((sortedArray) => {

                let NEOContainer = document.getElementById("NEO-container")
                NEOContainer.innerHTML += ""
                NEOContainer.innerHTML += NEOComponent(currentDate, sortedArray)
            })


    eventTarget.addEventListener("searchActivated", (evt) => {
        nearEarthObjectsHandler.getByDate(evt.detail.date)
        .then((res) => {
            let sizeArray = []
            res.near_earth_objects[evt.detail.date].forEach(NEO => {
                sizeArray.push(NEO.estimated_diameter.feet.estimated_diameter_max)
            });
            let sortedArray = sizeArray.sort((a, b) => b - a)
            return sortedArray
        })
        .then((sortedArray) => {

            let NEOContainer = document.getElementById("NEO-container")
            NEOContainer.innerHTML = ""
            NEOContainer.innerHTML += NEOComponent(evt.detail.date, sortedArray)
        })
    })

}

export default NEOList


