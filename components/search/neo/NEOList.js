import { NEOComponent, noNEOInformationAvailable } from "./NEO.js"
import nearEarthObjectsHandler from "../../../modules/nearEarthObjectsHandler.js"
import settings from "../../../modules/settings.js"

let eventTarget = document.querySelector("#eventHub")
let NEOContainer = document.getElementById("NEO-container")



const NEOList = () => {

    let currentDate = settings.formatDate(Date.now())

    //on first load get most recent neo's
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

            NEOContainer.innerHTML += ""
            NEOContainer.innerHTML += NEOComponent(currentDate, sortedArray)
        })

    //add event listener for the custom search event
    //fetch NEO by selected date
    //if no image display unavailable message, if image available display
    eventTarget.addEventListener("searchActivated", (evt) => {
        nearEarthObjectsHandler.getByDate(evt.detail.date)
            .then((res) => {
                console.log(res)
                if (res.element_count === 0) {
                    NEOContainer.innerHTML = ""
                    NEOContainer.innerHTML = noNEOInformationAvailable()
                }
                else {
                    let sizeArray = []
                    res.near_earth_objects[evt.detail.date].forEach(NEO => {
                        sizeArray.push(NEO.estimated_diameter.feet.estimated_diameter_max)
                    });
                    let sortedArray = sizeArray.sort((a, b) => b - a)
                    return sortedArray
                }
            })
            .then((sortedArray) => {
                if (sortedArray.length > 0) {
                    let NEOContainer = document.getElementById("NEO-container")
                    NEOContainer.innerHTML = ""
                    NEOContainer.innerHTML += NEOComponent(evt.detail.date, sortedArray)
                }
            })
    })

}

export default NEOList


