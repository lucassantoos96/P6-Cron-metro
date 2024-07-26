let time = document.querySelector("#time")


let sec = 0
let min = 0
let hor = 0

let interval



function start() {
    cron() 
    interval = setInterval(cron, 1000)
}


function stopp() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    sec = 0
    min = 0
    hor = 0
    time.innerHTML = "00:00:00"
}

function cron(){
    sec++
    if (sec == 60) {
        min++
        sec = 0
  
    if (min == 60) {
        hor++
        min = 0
    }
  }

    time.innerHTML = twoDigits(hor)+":"+twoDigits(min) +":"+twoDigits(sec)
}

function twoDigits(digit){
    if(digit<10){
    return("0"+digit)  }
else{
    return(digit)
}
  
}