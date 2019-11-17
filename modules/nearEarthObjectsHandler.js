import settings from "./settings.js"

export default {
    getToday(start) {

        settings.keySet()
            .then((res) => fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&api_key=${res}`))
            .then(res => res.json())
            .then(res => console.log(res))
    },

}