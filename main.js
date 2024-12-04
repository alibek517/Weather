let = temp = document.getElementById('temp')
let = tem = document.getElementById('tem')
let = info = document.getElementById('info')
let = loder = document.getElementById('loder')
let KEY = '9c7c4ad844bfb267f45fb405f007da8a'


const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather?q='
    const cityName = city
    const qury = '&units=metric&appid='
    loder.innerHTML = `<div class="loader" id="loder"></div> `
    const data = await fetch(base + cityName + qury + KEY)

    const jsonDate = await data.json()

    info.innerHTML =`<img src="https://openweathermap.org/img/wn/${jsonDate.weather[0].icon}@2x.png">`
    tem.textContent = `${jsonDate.sys.country}:
    ${jsonDate.name}`
    temp.textContent = `${Math.floor(jsonDate.main.temp)}°C`
    loder.textContent = ``

    
}
