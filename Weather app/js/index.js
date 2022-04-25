var container = document.getElementById('container');//app
const temp = document.querySelector('.temp');//temp
const date_out = document.querySelector('.city_date');//dateoutput
const time_out = document.querySelector('.city_time');//timeoutput
const condition = document.querySelector('.weather_condition');//conditionoutput
const name = document.querySelector('.city_name');//nameOutput
const icon = document.querySelector('.icon');//icon
const cloud = document.querySelector('.cloud');//cloudOutput
const wind = document.querySelector('.wind');//windOutput
const humidity = document.querySelector('.humidity');//windOutput
const location_form = document.getElementById('location_input');//form
const search = document.querySelector('.search');//search
const search_btn = document.querySelector('.search_button');//btn
const cities = document.querySelectorAll('.city');//cities


let city_input = "London";

cities.forEach((city)=>{
    city.addEventListener("click", (e)=>{
        city_input = e.target.innerHTML;
        fetchWeather();
        container.style.opacity = "0";
    })
})

location_form.addEventListener("submit", (e)=>{
    if(search.value.length == 0){
        alert('Please enter a city!');
    }else{
        city_input = search.value;
        fetchWeather();
        search.value = "";
        container.style.opacity = "0";
    }
    
    e.preventDefault();

});

const DayOfTheWeek = (day, month, year)=>{
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[new Date(`${day}/${month}/${year}`).getDay()];
};

let fetchWeather = ()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=75b0ba8995f644e798f152757220803&q=${city_input}&aqi=no`)
    .then(response => response.json())
    .then(data =>{
        temp.innerHTML = data.current.temp_c + "&#176;";
        condition.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const year = parseInt(date.substr(0, 4));
        const month = parseInt(date.substr(5, 2));
        const day = parseInt(date.substr(8, 2));
        const time = date.substr(11);

        date_out.innerHTML = `${DayOfTheWeek(day, month, year)} ${day}, ${month} ${year}`

        time_out.innerHTML = time;

        name.innerHTML = data.location.name;

        const iconID = "https:"+ data.current.condition.icon;
        icon.src = iconID;

        cloud.innerHTML = data.current.cloud +"%";

        humidity.innerHTML = data.current.humidity + "%";

        wind.innerHTML = data.current.wind_kph + "Km/h";

        let timeOfDay = "day";

        const code = data.current.condition.code;

        if(!data.current.is_day){
            timeOfDay = "night";
        }

        if(code == 1000){
            container.style.backgroundImage = `url("./images/${timeOfDay}/clear.jpg")`

            if(timeOfDay == "night"){
                search_btn.style.background = "#92A9BD";
            }
        }

        else if(code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1069 ||
                code == 1087 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282){
            
            container.style.backgroundImage = `url("./images/${timeOfDay}/cloudy.jpg")`

            if(timeOfDay == "night"){
                search_btn.style.background = "#92A9BD";
            }
        }

        else if (code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252 
            ){

            container.style.backgroundImage = `url("./images/${timeOfDay}/rainy.jpg")`

            if(timeOfDay == "night"){
                search_btn.style.background = "#92A9BD";
            }
        }

        else{
            container.style.backgroundImage = `url("./images/${timeOfDay}/snowy.jpg")`

            if(timeOfDay == "night"){
                search_btn.style.background = "#92A9BD";
            }
        }

        container.style.opacity = "1";
    })
    .catch((err)=>{
        console.log(err);
        alert('City Not Found. Please Try Again!');
        container.style.opacity = "1";
    });
};

fetchWeather();

container.style.opacity = "1";