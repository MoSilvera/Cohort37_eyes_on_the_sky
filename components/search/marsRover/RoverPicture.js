
const RoverPictureComponent = (object) => {
    return `
        <div class="rover">
            <h4 class=rover_name>${object.rover.name}</h4>
            <div class="rover_image">
                <img class="" src="${object.img_src}" alt="">
            </div>
            <div class="rover_details">
                <ul>
                    <li>
                        Earth Date: ${object.earth_date}
                    </li>
                    <li>
                        Camera: ${object.camera.full_name}
                    </li>
                    <li>
                        Martian Sol: ${object.sol}
                    </li>
                </ul>
            </div>
        </div>
    `
}

export default  RoverPictureComponent