import settings from "./settings.js"

export default {
    getToday() {
      settings.keySet()
      .then(res => fetch(`https://api.nasa.gov/planetary/apod?api_key=${res}`))
      .then(res => res.json())
      .then(res => console.log(res))
    }

}