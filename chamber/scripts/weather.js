//select the html elements in the documents
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


// create variables forthe url

const myKey = "e786808d3a6a707c23fa6cb5f613b6b0"
const myLat = "13.638835588487488"
const myLong = "-88.78259102525926"

// construct a full path using template literals

const myURl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperiall`;

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
// display the json data into my web page 
function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}2x.png; 
}
//start the process
apiFetch();
