// Incomplete API for event retrieval
let endpoint = "https://www.eventbriteapi.com/v3/users/me/?token=5A56SHW7FQLTMQX455BV";
console.log(endpoint);

async function getEvents() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images);

    const output = document.getElementById("gif-container");
    output.innerHTML = "";

    for (let url of images) {
        output.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }
}

const button = document.querySelector("#see-events-btn");
const eventsContainer = document.querySelector("#events-container");
button.addEventListener("click", function() {
    getEvents();
});