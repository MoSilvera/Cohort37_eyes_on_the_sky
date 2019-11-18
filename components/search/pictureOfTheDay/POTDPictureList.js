import PictureOfTheDayHandler from "../../../modules/PictureOfTheDayHandler.js"
import PictureOfTheDayComponent from "./PictureOfTheDay.js"

const POTDPictureList = (date) => {

    const rootElement = document.querySelector(".root")

    PictureOfTheDayHandler.getByDate(date)
        .then((res) => {

            rootElement.innerHTML += PictureOfTheDayComponent(res)
        }
        )

}

export default POTDPictureList