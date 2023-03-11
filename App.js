const daysE = document.getElementById("days")
const hoursE = document.getElementById("hours")
const MinutesE = document.getElementById("minutes")
const SecondsE = document.getElementById("seconds")
const monthsE = document.getElementById("months")

const birthdayEve = '25 Aug 2023'

const computeFunc = () => {
    const birthdaysEveDate = new Date(birthdayEve)
    const currentDate = new Date()
    
    const totalSeconds = (birthdaysEveDate - currentDate) / 1000

    
    const months = Math.floor(totalSeconds / 3600 /24 / 30)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds % 60) 
     

    daysE.innerHTML = days
    hoursE.innerHTML =  hours
    MinutesE.innerHTML = minutes
    SecondsE.innerHTML =  seconds
    monthsE.innerHTML = months


//   console.log(totalSeconds)   
  console.log(months, days, hours, minutes, seconds)   
}


// const formatDay = (time) => {
//     if (time < 10) {
//         return "o" + time    }
// }

computeFunc();

setInterval(computeFunc, 1000)