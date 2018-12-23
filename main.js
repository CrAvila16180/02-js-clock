const log = (content) => console.log(content);

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let hourDisplay = document.querySelector('#hourDisplay');
let minuteDisplay = document.querySelector('#minuteDisplay');
let secondDisplay = document.querySelector('#secondDisplay');

let textHour = document.querySelector('.textHour');

let moveSeconds = (now) => {
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if(seconds < 10){
        secondDisplay.textContent = `0${seconds}`;
    } else{
        secondDisplay.textContent = `${seconds}`;
    }
   
    
}

let moveMinutes = (now) => {
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    log(minutes);
    if(minutes < 10){
        minuteDisplay.textContent = `0${minutes} :`;
    } else{
        minuteDisplay.textContent = `${minutes} :`;
    }
   
    
}

let moveHours = (now) => {
    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    log(hours);
    if(hours < 10){
        hourDisplay.textContent = `0${hours} :`;
    } else{
        hourDisplay.textContent = `${hours} :`;
    }
    
}

let setDate = () => {

    const now = new Date();
    moveSeconds(now);
    moveMinutes(now);
    moveHours(now);

    
    
};

setInterval(setDate, 1000);