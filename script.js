const dispSeconds = document.getElementById("seconds")
const dispMinutes = document.getElementById("minutes")
const dispHours = document.getElementById("hours")
const dispDays = document.getElementById("days")



countdown = (d,h,m,s) => {
    let days = d
    let hours = h
    let minutes = m
    let seconds = s
     
    const interval = setInterval(function diminute () {
        seconds -= "01"
        seconds = seconds.toString()
        minutes = minutes.toString()
        hours = hours.toString()
        days = days.toString()
            if (seconds.length < 2){
                seconds = "0" + seconds  
            }
            if (minutes.length < 2){
                minutes = "0" + minutes
            }
            if (hours.length < 2) {
                hours = "0" + hours
            }
            if (days.length < 2) {
                days = "0" + days
            }

            switch (seconds){
                case "-1": {
                    seconds = "59"
                    minutes -= "01"
                    minutes = minutes.toString()
                    if (minutes.length < 2){
                        minutes = "0" + minutes
                    } 
                } 
            }    
            switch (minutes){
                case "-1": {
                    minutes = "59"
                    hours -= "01"
                    hours = hours.toString()
                    if (hours.length < 2) {
                        hours = "0" + hours
                    }
                }
            }
            switch (hours){
                case "-1": {
                    hours = "24"
                    days -= "01"
                    days = days.toString()
                    if (days.length < 2) {
                        days = "0" + days
                    }
                }
            }

            dispSeconds.innerText = seconds
            dispMinutes.innerText = minutes
            dispHours.innerText = hours
            dispDays.innerText = days

        if(seconds == "46" &&
        minutes == "00" &&
        hours == "00" &&
        days =="00"
        ){
            track.play()}
        
        if (
            seconds == "00" &&
            minutes == "00" &&
            hours == "00" &&
            days == "00"
        ) {
            stop()
        }
},1000)



        stop = () => {
            dispSeconds.innerText = "00"
            dispMinutes.innerText = "00"
            dispHours.innerText = "00"
            dispDays.innerText = "00"
            clearInterval(interval)
        }
}


document.addEventListener("DOMContentLoaded", startCountdown = () => {
    countdown("00","00","15","00")
})