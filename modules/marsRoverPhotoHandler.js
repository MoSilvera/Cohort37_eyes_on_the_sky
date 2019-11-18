import settings from "./settings.js"

export default {

    //gets mars rover pictures by date
    getByDate(start, rover) {
       let list = settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${start}&api_key=${res}`))
            .then((res) => res.json())

            return list

    }
}