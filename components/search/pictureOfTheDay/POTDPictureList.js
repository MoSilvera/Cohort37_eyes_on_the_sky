import PictureOfTheDayHandler from "../../../modules/PictureOfTheDayHandler.js"
import PictureOfTheDayComponent from "./PictureOfTheDay.js"
import settings from "../../../modules/settings.js"


let eventTarget = document.getElementById("eventHub")
const containerElement = document.querySelector(".POTD-container")



const POTDPictureList = () => {

    eventTarget.addEventListener("click", (evt) => {
        if(evt.target.id.startsWith("details")){
            eventTarget.dispatchEvent(new CustomEvent("dialogHandler", {
                detail: {
                    targetId: evt.target.id
                }
            }))
        }
    })

    eventTarget.addEventListener("dialogHandler", (evt) => {
        let detailsDialog = document.getElementById("dialog-POTD")
        if (evt.detail.targetId === "details--POTD"){
            detailsDialog.showModal()
        }
        else{
            detailsDialog.close()
        }

    })

    //on first load get today's picture of the day

        PictureOfTheDayHandler.getByDate(settings.formatDate(Date.now()))
            .then((res) => {
                containerElement.innerHTML = PictureOfTheDayComponent(res)
            })

    //listen for the custom event 'search activated'. If a date property was sent as a detail
    //if the date is blank alert the user
    //else search with the selected date
    eventTarget.addEventListener('searchActivated', event => {
        if ("date" in event.detail) {

            if (!event.detail.date) {
                alert("please select a date")
            } else {

                PictureOfTheDayHandler.getByDate(event.detail.date)
                .then((res) => {

            containerElement.innerHTML = PictureOfTheDayComponent(res)
        }
        )
        }
    }
})
}

export default POTDPictureList