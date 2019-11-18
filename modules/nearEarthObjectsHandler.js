import settings from "./settings.js"

export default {

    //gets NEOs by start date, default 7 day span
    getByDate(start) {
        return settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&api_key=${res}`))
            .then(res => res.json())
            .then(res => console.log(res)) 
    },
    //Browses all NEO data by page
    browseNEOByPage(pageNumber) {
        return settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=${pageNumber}&api_key=${res}`))

    }

}