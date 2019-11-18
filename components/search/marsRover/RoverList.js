import marsRoverPhotoHandler from "../../../modules/marsRoverPhotoHandler.js"
import RoverPictureComponent from "./RoverPicture.js"

const RoverPictureList = (date, rover) => {

    const rootElement = document.querySelector(".root")

    marsRoverPhotoHandler.getByDate(date, rover)
        .then((res) => {
            let roverPhotosHTML = ""
            let keyTracker = {}
            res.photos.forEach((object) => {
                if (!keyTracker[object.camera.full_name])
                {
                    keyTracker[object.camera.full_name] = true
                    roverPhotosHTML += RoverPictureComponent(object)
                }
            })
            return roverPhotosHTML
        }
        )
        .then((roverPhotosHTML) => rootElement.innerHTML += roverPhotosHTML)

}

export default RoverPictureList