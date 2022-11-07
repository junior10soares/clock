let sElement = document.querySelector('.p.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')
let digital = document.querySelector('.digital') 

function updateClock(){

    let now = new Date() 
    let second = now.getSeconds()
    let minutes = now.getMinutes()
    let hour = now.getHours()

    digital.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(second)}`
    let sDeg = ((360 / 60 ) * second) - 90
    let mDeg = ((360 / 60 ) * minutes) - 90
    let hDeg = ((360 / 12 ) * hour) - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time){

    if(time < 10){
        return '0' + time 
    }else{
        return time
    }
}

setInterval(updateClock, 1000)
updateClock()