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
let weather;

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(function(res){
    console.log(res);
    return res.json
})
.then(function(myDATA){
    consol.log(myDATA)
    weather=myDATA;
})

 const divElem=document.querySelector('.weather header') ;
 console.log(divElem); 



    divElem.innerHTML= `${q}
    ${temp}
    ${pressure}
    ${description}
    ${speed}
    ${dec}`
    
    
