const search = document.getElementById('searchbar');
const input = document.getElementById('city-input');
const title = document.getElementById('title');
const status = document.getElementById('status');
const icon = document.getElementById('weathericon');
const temp = document.getElementById('temp');

const fetchApi = () => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=7f3376673b0c42feffdf9b1d57f8047d`
    fetch(weatherUrl)
        
    .then(response => response.json())
    .then((data)=>{
        title.innerText = data.name
        status.innerText = data.weather[0].description
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        icon.setAttribute('src',iconUrl);
        temp.innerText = Math.round(data.main.temp-273)  
    })
}

search.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetchApi();

})