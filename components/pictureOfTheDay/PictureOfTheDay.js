
export const PictureOfTheDayComponent = (object) => {

    return `
        <div class="potd">
            <h4 class=rover_name>${object.title}</h4>

            <div class="potd_image">
                <img class="" src="${object.url}" alt="">
            </div>

            <div class="rover_details">
                        Date: ${object.date}
            </div>

            <button id="details--POTD">Details</button>

            <dialog id="dialog-POTD" >
            <div> Description: ${object.explanation} </div>
            <button id="details--close">Close</button>
            </dialog>

        </div>
    `
}



export const noPictureOfTheDayAvailable = () => {
    return `
        <div>
            <h4>Sorry! No picture of the day available</h4>
        </div>
    `
}