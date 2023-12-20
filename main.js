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


let post;


fetch ('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')

.then(function(res11){
    console.log(res11);
    return res11.json();
})

.then(function(myData){
    console.log(myData);
    post= mydata;
    draw();

})


 function draw(){
    const divElem=document.querySelector('.weather') ;
    console.log(divElem);
    
    divElem.innerHTML=`       
    <div class="weather_header">
   <div class="weather_main">
       <div class="weather_city" >${post.q}</div>  
      </div>
      <div class="weather_icon">
          <img src="http://openweathermap.org/img/w/${post.icon}.png"alt="Clouds">    
         </div>
      </div>
   <div class="weather_temp">${post.temp}
   </div> 
   <div class="weather_pressure">${post.pressure}
   </div>
    <description class="weather_description">${post.description}
  
  </div>
   </div> <div class="weather_speed">${post.speed}
   </div>
   <div class="weather_deg">${post.dec};
   </div>
   </div>
   
  `
   }
  
     
      
  

 
 


 




  
 
 
 
