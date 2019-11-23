import marsRoverPhotoHandler from "../../modules/marsRoverPhotoHandler.js"
import { RoverPictureComponent, noRoverPictureAvailable } from "./RoverPicture.js.js"
import settings from "../../modules/settings.js"


let currentDate = settings.formatDate(Date.now())
const containerElement = document.querySelector(".Rover-container")
const eventTarget = document.querySelector("#eventHub")

//removes duplicate photos- some, not *all* photos taken by the same camera are duplicates
//I decided to limit the list to one photo per camera, per rover, to avoid duplicates or near identical photos
const duplicatePhotoRemover = (photoObject) => {
    let keyTracker = {}
    var singleRoverHTML = ""
    photoObject.photos.forEach((object) => {
        if (!keyTracker[object.camera.full_name]) {
            keyTracker[object.camera.full_name] = true
            singleRoverHTML = singleRoverHTML += RoverPictureComponent(object)
        }
    })
    return singleRoverHTML
}

//checks to see if any photos are available for a given day
// if so render them
// if not render the noPhotos message on the dom
const noPhotosAvailable = (htmlString, date) => {
    if (htmlString === "") {
        containerElement.innerHTML = ""
        containerElement.innerHTML = noRoverPictureAvailable(date)
    }
    else {
        containerElement.innerHTML = ""
        containerElement.innerHTML = htmlString
    }
}

const RoverPictureList = () => {
    //initial load of rover pictures for current date
    let roverPhotosHTML = ""
    marsRoverPhotoHandler.getByDate(currentDate, "spirit")
        .then((res) => roverPhotosHTML += duplicatePhotoRemover(res))
        .then(() => marsRoverPhotoHandler.getByDate(currentDate, "curiosity"))
        .then((res) => roverPhotosHTML += duplicatePhotoRemover(res))
        .then(() => marsRoverPhotoHandler.getByDate(currentDate, "opportunity"))
        .then((res) => roverPhotosHTML += duplicatePhotoRemover(res))
        .then(() => noPhotosAvailable(roverPhotosHTML, currentDate))


    //add a listener for the custom search button event
    //if the property date is available on the details object fetch the data and put it on the dom
    eventTarget.addEventListener("searchActivated", (evt) => {
        if (evt.detail.date) {
            let date = evt.detail.date
            let eventRoverPhotosHTML = ""
            marsRoverPhotoHandler.getByDate(evt.detail.date, "spirit")
                .then((res) => eventRoverPhotosHTML += duplicatePhotoRemover(res))
                .then(() => marsRoverPhotoHandler.getByDate(evt.detail.date, "curiosity"))
                .then((res) => eventRoverPhotosHTML += duplicatePhotoRemover(res))
                .then(() => marsRoverPhotoHandler.getByDate(evt.detail.date, "opportunity"))
                .then((res) => eventRoverPhotosHTML += duplicatePhotoRemover(res))
                .then(() => noPhotosAvailable(eventRoverPhotosHTML, date))
        }
    })

}


export default RoverPictureList