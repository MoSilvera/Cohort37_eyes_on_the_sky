let searchContainer = document.getElementById("search")
let eventTarget = document.getElementById("eventHub")

eventTarget.addEventListener("click", (evt) => {
    if(evt.target.id === "search--btn"){
        console.log("custom event has been fired")
        console.log(document.getElementById("search_date").value)
        eventTarget.dispatchEvent(new CustomEvent("searchActivated", {
            detail: {
                date: document.getElementById("search_date").value
            }
        })
        )

    }
}
)

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



