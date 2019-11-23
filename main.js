import RoverPictureList from "./components/search/marsRover/RoverList.js"
import POTDPictureList from "./components/search/pictureOfTheDay/POTDPictureList.js"
import SearchComponent from "./components/search/SearchComponent.js"
import nearEarthObjectsHandler from "./modules/nearEarthObjectsHandler.js"
import settings from "./modules/settings.js"
import NEOList from "./components/search/neo/NEOList.js"

RoverPictureList()
POTDPictureList()
NEOList()
SearchComponent.searchComponentInit()



