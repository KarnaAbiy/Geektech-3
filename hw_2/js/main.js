// //////////////////////////////////////////////////////////////////
//1.    

// Это вообще не получилось сделать не смог добавить рекурсию сюда 
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// positionX = 0;
// positionY = 0;

// let i = 450

// const moving = () => {
//     if(positionX <= 440){
//         positionX += 10;
//         block.style.left = `${positionX}px`
//         setTimeout(moving, 50); 
//     }else if(positionY <= 440){
//         positionY += 10;
//         block.style.top = `${positionY}px`
//         setTimeout(moving, 50);
//     }else if(i>=0){
//         block.style.top = `${--i}px`
//         block.style.left = `${--i}px`
//         setTimeout(moving, 15);
//     }
// }

function moveBlock(angle) {
    const radius = 225; // радиус окружности
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * radius);
    const block = document.querySelector(".block");
  
    block.style.left = 225+ y + "px";
    block.style.top = 225 + x + "px";
  
    angle += 0.1;

    setTimeout(function() {
      moveBlock(angle);
    }, 30);
}
moveBlock(50)

// /////////////////////////////////////////////////////////////////////

// 2.

const timerSec = document.querySelector('.timer');

function initTimer() {
    let seconds = parseInt(timerSec.textContent.match(/(\d+)/)[0]);
    const timer = setInterval(() => {
        if(seconds < 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
        timerSec.textContent = seconds;
        seconds -= 1;
    }, 1000);
}
 
 initTimer();
//  еле сделал
