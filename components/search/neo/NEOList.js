import NEOComponent from "./NEO.js"
import nearEarthObjectsHandler from "../../../modules/nearEarthObjectsHandler.js"

const NEOList = (date) => {

   nearEarthObjectsHandler.getByDate(date)
    .then((res) =>{
    let sizeArray = []
    res.near_earth_objects[date].forEach( NEO => {
       sizeArray.push(NEO.estimated_diameter.feet.estimated_diameter_max)
    });
    let sortedArray = sizeArray.sort((a,b) => b - a)
    return sortedArray
    })
    .then((sortedArray) => {

        let NEOContainer = document.getElementById("NEO-container")
        NEOContainer.innerHTML += NEOComponent(date, sortedArray)
    } )
}

export default NEOList


