
import  keySet  from "./settings.js"

export default {
    getToday() {
      keySet()
      .then(res => fetch(`https://api.nasa.gov/planetary/apod?api_key=${res}`))
      .then(res => res.json())
      .then(res => console.log(res))
    },

}