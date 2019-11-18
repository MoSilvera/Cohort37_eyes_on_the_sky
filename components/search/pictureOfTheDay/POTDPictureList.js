import PictureOfTheDayHandler from "../../../modules/PictureOfTheDayHandler.js"
import PictureOfTheDayComponent from "./PictureOfTheDay.js"



const POTDPictureList = (date) => {


    const containerElement = document.querySelector(".POTD-container")

    PictureOfTheDayHandler.getByDate(date)
        .then((res) => {

            containerElement.innerHTML += PictureOfTheDayComponent(res)
        }
        )



}

export default POTDPictureList