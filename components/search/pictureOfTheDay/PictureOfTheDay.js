
const PictureOfTheDayComponent = (object) => {
    return `
        <div class="potd">
            <h4 class=rover_name>${object.title}</h4>
            <div class="potd_image">
                <img class="" src="${object.url}" alt="">
            </div>
            <div class="rover_details">
                <ul>
                    <li>
                        Date: ${object.date}
                    </li>
                    <li>
                        Description: ${object.explanation}
                    </li>
                    <li>
                    &copy; ${object.copyright}
                    </li>
                </ul>
            </div>
        </div>
    `
}

export default  PictureOfTheDayComponent