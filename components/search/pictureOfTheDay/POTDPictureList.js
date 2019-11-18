import PictureOfTheDayHandler from "../../../modules/PictureOfTheDayHandler.js"
import PictureOfTheDayComponent from "./PictureOfTheDay.js"

const initializeDetailButtonEvents = () => {

   document.querySelector(".root").addEventListener("click", (evt) => {
        const detailsDialog = document.getElementById("dialog-POTD")

       if (evt.target.id === "details--POTD")
       {
            detailsDialog.showModal()
       }
       if (evt.target.id === "close-POTD")
       {
            detailsDialog.close()
       }
})

}

const POTDPictureList = (date) => {

    initializeDetailButtonEvents()

    const rootElement = document.querySelector(".root")

    PictureOfTheDayHandler.getByDate(date)
        .then((res) => {

            rootElement.innerHTML += PictureOfTheDayComponent(res)
        }
        )
        .then(() => initializeDetailButtonEvents())


}

export default POTDPictureList