import marsRoverPhotoHandler from "../../../modules/marsRoverPhotoHandler.js"
import RoverPictureComponent from "./RoverPicture.js"
import settings from "../../../modules/settings.js"


let currentDate = settings.formatDate(Date.now())
const containerElement = document.querySelector(".Rover-container")
const eventTarget = document.querySelector("#eventHub")

//removes duplicate photos- some, not *all* photos taken by the same camera are duplicates
//I decided to limit the list to one photo per camera to avoid excessive duplicates or near identical photos
const duplicatePhotoRemover = (photoObject) => {
    let keyTracker = {}
    var singleRoverHTML = ""
    photoObject.photos.forEach((object) => {
        if (!keyTracker[object.camera.full_name])
        {
            keyTracker[object.camera.full_name] = true
            singleRoverHTML = singleRoverHTML += RoverPictureComponent(object)
        }
    })
    return singleRoverHTML
}


const RoverPictureList = () => {
        let roverPhotosHTML = ""
            marsRoverPhotoHandler.getByDate(currentDate, "spirit")
            .then((res) => {
                let photosHTML = duplicatePhotoRemover(res)
                roverPhotosHTML += photosHTML
                })
            .then(() => marsRoverPhotoHandler.getByDate(currentDate, "curiosity"))
            .then((res) => {
                let photosHTML = duplicatePhotoRemover(res)
                roverPhotosHTML += photosHTML
                })
            .then(() => marsRoverPhotoHandler.getByDate(currentDate, "opportunity"))
            .then((res) => {
                let photosHTML = duplicatePhotoRemover(res)
                roverPhotosHTML += photosHTML
                })
            .then(() => containerElement.innerHTML += roverPhotosHTML)


    eventTarget.addEventListener("searchActivated", (evt) => {
        if(evt.detail.date){
            let eventRoverPhotosHTML = ""
            marsRoverPhotoHandler.getByDate(evt.detail.date, "spirit")
            .then((res) => {

                let photosHTML = duplicatePhotoRemover(res)
                eventRoverPhotosHTML += photosHTML
                })
            .then(() => marsRoverPhotoHandler.getByDate(evt.detail.date, "curiosity"))
            .then((res) => {

                let photosHTML = duplicatePhotoRemover(res)
                eventRoverPhotosHTML += photosHTML
                })
            .then(() => marsRoverPhotoHandler.getByDate(evt.detail.date, "opportunity"))
            .then((res) => {

                let photosHTML = duplicatePhotoRemover(res)
                eventRoverPhotosHTML += photosHTML
                })
            .then(() => {
                containerElement.innerHTML = ""
                containerElement.innerHTML = eventRoverPhotosHTML})
        }
    })

}


export default RoverPictureList