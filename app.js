

fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(res => res.json())

// .then(res => console.log(res))

.then(data => {
    let temp = document.querySelector(".temp");
    temp.textContent =  ("Температура: ") + data.main.temp; 

    let speed = document.createElement("p");
        speed.innerHTML = ("Швидкість вітру: " + data.wind.speed + " м/с");
        document.body.append(speed);

    let pressure = document.createElement("p");
        pressure.innerHTML = ("Тиск: " + data.main.pressure);
        document.body.append(pressure);
    
    let description = document.createElement("p");
        description.textContent = ("Опис: " + data.weather[0].description);
        document.body.append(description);
    
    let humidity = document.createElement("p");
        humidity.textContent = ("Вологість: " + data.main.humidity + "%");
        document.body.append(humidity);

    let img = document.createElement("img");
    let imgUrl = `http://openweathermap.org/img/w/10d.png`
            img.setAttribute("src",imgUrl);
            document.body.append(img)

})