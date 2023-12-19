const weatherBlock=document.querySelector('#weather');
const server='http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
const responce=await fetch(server,{
    method:'Get',
})
const responceResult =await response.json();

if(response.ok){
    getWeather(responceResult);
}else{
    weatherBlock.innerHTML=responceResult.message;
}
function getWeather(data) {
    console.log(data);

    const location = data.name;
    const temp = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;


    const template =
        '<div class="weather_header"
        '    <div class="weather_main"
        '        <div class="weather_city">${location}</div>
        '    <div class="weather_status">${weaterStatus}</div>
        '</div>
        '    <div class="weather_icon">
        '        <img src="http://openweathermap.org/img/w/10d.png"alt="Clouds">
        '    </div>
        '</div>
        '    <div class="weather_temp">${temp}</div>
        '    <div class="weather_feels:13"$</div>'
}
if (weatherBlock){
    loadWeather();
}