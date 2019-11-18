import settings from "./settings.js"

export default {
    //gets the astronomy picture of te day
    getByDate(date) {
      return settings.keySet()
      .then(res => fetch(`https://api.nasa.gov/planetary/apod?api_key=${res}&date=${date}`))
      .then(res => res.json())
    }

}