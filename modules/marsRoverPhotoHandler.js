import settings from "./settings.js"

export default {

    getByDate(start) {
        settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${start}&api_key=${res}`))
            .then(res => res.json())
            .then(res => console.log(res))
    },
    browseNEOByPage(pageNumber) {
        settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=${pageNumber}&api_key=${res}`))

    }

}