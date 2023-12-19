//<!--За допомогою ajax-запиту вивести погоду
//http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
//q=XXX - місто, для якого показати погоду
//temp – температура
//pressure - тиск
//description – опис
//humidity – вологість
//speed – швидкість вітру
//deg - напрям у градусах
//icon - значок, де 10d код іконки
//http://openweathermap.org/img/w/10d.png
const weatherBlock=document.querySelector('#weather');
const server='http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
const responce= fetch(server,{
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


    const template =` '< class="weather_header"
        <div class="weather_main"
           <div class="weather_city">${q}</div>
       <div class="weather_status">${temp}</div>
    </div> 
    <div class="weather_status">${pressure}
    </div>
     <div class="weather_status">${description}
    </div>
    </div> <div class="weather_status">${speed}
    </div>
    </div> <div class="weather_status">${dec}
    </div>
    </div>
    <div class="weather_icon">
        <img src="http://openweathermap.org/img/w/10d.png"alt="Clouds">    </div>
    </div>

 </div>
}`

}
if (weatherBlock){
    loadWeather();
}