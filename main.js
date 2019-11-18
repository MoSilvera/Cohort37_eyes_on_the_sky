import RoverPictureList from "./components/search/marsRover/RoverList.js"
import POTDPictureList from "./components/search/pictureOfTheDay/POTDPictureList.js"
import initializeDetailButtonEvents from "./modules/eventHandler.js"
import SearchComponent from "./components/search/SearchComponent.js"
import nearEarthObjectsHandler from "./modules/nearEarthObjectsHandler.js"
import settings from "./modules/settings.js"

initializeDetailButtonEvents()
SearchComponent.searchComponentInit()
nearEarthObjectsHandler.getByDate("2019-06-03")
RoverPictureList("2019-06-03", "curiosity")
POTDPictureList("2019-11-11")







