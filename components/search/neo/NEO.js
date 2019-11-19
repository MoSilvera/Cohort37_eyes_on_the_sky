const NEOComponent = (date, diameterArray) => {

    return `
        <div>
        <p>Date:${date}</p>
        <div> ${diameterArray.length} objects were recorded near earth!</div>
        <div>The largest object recorded was ${diameterArray[0].toString().split(".")[0]} feet wide</div?
        </div>
    `
}

export default NEOComponent