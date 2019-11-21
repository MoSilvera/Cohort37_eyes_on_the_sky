import POTDPictureList from "../components/search/pictureOfTheDay/POTDPictureList.js"
import RoverList from "../components/search/marsRover/RoverList.js"

const initializeDetailButtonEvents = () => {

    document.querySelector(".root").addEventListener("click", (evt) => {
         const detailsDialog = document.getElementById("dialog-POTD")

        if (evt.target.id === "details--POTD")
        {
             detailsDialog.showModal()
        }
        if (event.target.id === "search--btn")
        {
            document.querySelector(".Rover-container").innerHTML = ""
            RoverList(document.getElementById("search_date").value, document.getElementById("rover_select").value)
        }
 })

 }

 export default initializeDetailButtonEvents