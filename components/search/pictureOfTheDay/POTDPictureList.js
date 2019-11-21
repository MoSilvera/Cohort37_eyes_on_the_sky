import PictureOfTheDayHandler from "../../../modules/PictureOfTheDayHandler.js"
import PictureOfTheDayComponent from "./PictureOfTheDay.js"
import settings from "../../../modules/settings.js"


let eventTarget = document.getElementById("eventHub")
const containerElement = document.querySelector(".POTD-container")

const POTDPictureList = (date) => {
    //on first load *when no date is passed in* get today's picture of the day
    if(!date){
        PictureOfTheDayHandler.getByDate(settings.formatDate(Date.now()))
            .then((res) => {
                containerElement.innerHTML = PictureOfTheDayComponent(res)
            })
    }

    //listen for the custom event 'search activated'. If a date property was sent as a detail
    //
    eventTarget.addEventListener('searchActivated', event => {
        if ("date" in event.detail) {
            if (event.detail.crimeId === "") {
                alert("please select a date")
            } else {

                PictureOfTheDayHandler.getByDate(date)
                .then((res) => {

            containerElement.innerHTML = PictureOfTheDayComponent(res)
        }
        )
        }
    }
        else{
            PictureOfTheDayHandler.getByDate(settings.formatDate(Date.now()))
            .then((res) => {
                containerElement.innerHTML = PictureOfTheDayComponent(res)
            })

        }

})



}

export default POTDPictureList