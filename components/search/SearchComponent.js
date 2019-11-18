let searchContainer = document.getElementById("search")

export default {

    searchComponent() {
        return `
            <input type=date id="search_date"></input>
            <select id="rover_select">
                <option value="curiosity">Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
            </select>
            <button id="search--btn">Search</button>
        `
    },
    searchComponentInit() {
        searchContainer.innerHTML += this.searchComponent()
    }



}



