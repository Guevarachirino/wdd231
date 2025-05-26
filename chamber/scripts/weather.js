//select the html elements in the documents
const myTown = document.querySelector('#own');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


// create variables forthe url

const myKey = "e786808d3a6a707c23fa6cb5f613b6b0"
const myLat = "13.639961413786898"
const myLong = "-88.78357813366466"

// construct a full path using template literals

const myURl = '//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial'

//try to grab the current weather data 
async function apiFetch() {
    try {
        const response = await fetch(myURl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
