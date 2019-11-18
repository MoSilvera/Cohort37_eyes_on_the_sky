export default {
    //retrieves the API key from database
    keySet() {
        return fetch("http://localhost:3003/keys/0")
        .then(res => res.json())
        .then(res => {return res.key})
    },
    //formats date into yyyy-mm-dd as accepted by the NASA API
    formatDate (date){
        var d = new Date(date),
            month = (d.getMonth() + 1),
            day = d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }

}



