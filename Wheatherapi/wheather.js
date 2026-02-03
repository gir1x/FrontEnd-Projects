const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "a62552ad1baf9c318f317c77730169ee";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityinput.value;

    if (city) {
        try {
            const weatherdata = await getweatherdata(city);
            displayweatherinfo(weatherdata);
        } catch (error) {
            console.error(error);
            displayerror(error);
        }
    }
    else{
        displayerror("Please enter a city");
    }

});

async function getweatherdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    console.log(response);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return await response.json();
}
function displayweatherinfo(data){
    const{name: city, main:{temp, humidity}, weather:[{description,id}]}=data;
    card.textContent="";
    card.style.display="flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descriptiondisplay = document.createElement("p");
    const weatheremojidisplay = document.createElement("p");

    citydisplay.textContent=`${city}`;
    tempdisplay.textContent=`${(temp - 273.15).toFixed(2)} °C`;
    humiditydisplay.textContent=`${humidity}%`;
    descriptiondisplay.textContent=`${description}`;
    weatheremojidisplay.textContent=getweatheremoji(id);

    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descriptiondisplay.classList.add("descriptiondisplay");
    weatheremojidisplay.classList.add("weatheremoji");

    card.appendChild(citydisplay);
    card.appendChild(weatheremojidisplay);
    card.appendChild(tempdisplay);
    card.appendChild(descriptiondisplay);
    card.appendChild(humiditydisplay);
}
function getweatheremoji(weatherid){
    
    switch (true) {
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️"; 

        case (weatherid >= 300 && weatherid < 500):
            return "🌦️"; 
        case (weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case (weatherid >= 600 && weatherid < 700):
            return "❄️"; 
        case (weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case (weatherid === 800):
            return "☀️"; 
        case (weatherid > 800 && weatherid < 900):
            return "☁️";
        default:
            return "🌈";
    }

}


function displayerror(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent= message;
    errordisplay.classList.add("errordisplay");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errordisplay);
}