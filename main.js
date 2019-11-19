import RoverPictureList from "./components/search/marsRover/RoverList.js"
import POTDPictureList from "./components/search/pictureOfTheDay/POTDPictureList.js"
import initializeDetailButtonEvents from "./modules/eventHandler.js"
import SearchComponent from "./components/search/SearchComponent.js"
import nearEarthObjectsHandler from "./modules/nearEarthObjectsHandler.js"
import settings from "./modules/settings.js"
import NEOList from "./components/search/neo/NEOList.js"

initializeDetailButtonEvents()
SearchComponent.searchComponentInit()
RoverPictureList("2019-06-03", "curiosity")
POTDPictureList("2019-11-11")
NEOList(settings.formatDate(Date.now()))


