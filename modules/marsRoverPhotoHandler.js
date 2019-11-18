import settings from "./settings.js"

export default {

    //gets mars rover pictures by date
    getByDate(start) {
        settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${start}&api_key=${res}`))
            .then(res => res.json())
            .then(res => console.log(res))
    }
}