const keySet = () => {
    return fetch("http://localhost:3003/keys/0")
    .then(res => res.json())
    .then(res => {return res.key})
}

export default keySet 