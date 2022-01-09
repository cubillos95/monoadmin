const llamada = {
    //************************************************* */
    solicitudGet: (url) => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.send()
    }),
    //************************************************* */
    solicitudPos: (url, dato) => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onload = () => { resolve(xhr.response) }
        xhr.send(dato)
    }),


}
export { llamada }