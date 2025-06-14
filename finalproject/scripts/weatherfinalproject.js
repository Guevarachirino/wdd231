const myKey = 'e786808d3a6a707c23fa6cb5f613b6b0';

const departments = [
    { name: 'La Libertad', lat: 13.4885, lon: -89.3228 },
    { name: 'Sonsonate', lat: 13.7185, lon: -89.7214 },
    { name: 'Ahuachapán', lat: 13.9226, lon: -89.845 },
    { name: 'San Vicente', lat: 13.6406, lon: -88.7854 },
    { name: 'Usulután', lat: 13.3501, lon: -88.4429 },
    { name: 'San Miguel', lat: 13.4833, lon: -88.1833 },
    { name: 'La Unión', lat: 13.328, lon: -87.8439 }
];

const select = document.getElementById('departmentSelect');
const result = document.getElementById('weather-result');

// Llenar el <select> con opciones
departments.forEach((dept, index) => {
    const option = document.createElement('option');
    option.value = index; // Usamos el índice como valor
    option.textContent = dept.name;
    select.appendChild(option);
});

// Evento al cambiar el valor del <select>
select.addEventListener('change', () => {
    const selectedIndex = select.value;
    if (selectedIndex === '') {
        result.innerHTML = '';
        return;
    }

    const dept = departments[selectedIndex];
    showWeather(dept);
});

// Mostrar clima
function showWeather(dept) {
    const url = `//api.openweathermap.org/data/2.5/weather?lat=${dept.lat}&lon=${dept.lon}&appid=${myKey}&units=imperial`;
    //api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            result.innerHTML = `
        <h2>${dept.name}</h2>
        <img src="${icon}" alt="${data.weather[0].description}">
        <p><strong>${data.weather[0].description}</strong></p>
        <p>🌡️ Temperature: ${data.main.temp} °F</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
        })
        .catch(err => {
            console.error(err);
            result.innerHTML = `<p>Error getting weather ${dept.name}</p>`;
        });
}
