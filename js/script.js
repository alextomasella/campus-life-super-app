// API for current weather in Liberty, MO
let endpoint = "https://api.open-meteo.com/v1/forecast?latitude=39.25&longitude=-94.42&current_weather=true";


async function getEvents() {
    const response = await fetch(endpoint);
    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Raw data:", data);

    // Extract current temp
    const temp = data.current_weather?.temperature;

    const output = document.getElementById("weather-container");
    if (!output) return;

    // Clear container
    output.innerHTML = "";

    // Show current temp
    output.innerHTML = `
        <div class="p-3 border rounded">
            <h3>The current temperature is:</h3>
            <p class="display-4">${temp}°C</p>
        </div>
    `;
}

const button = document.querySelector("#weather-btn");
const weatherContainer = document.getElementById("weather-container");

if (button && weatherContainer) {
    button.addEventListener("click", function () {
        console.log("What's the weather like?");
        getEvents();
    });
}

