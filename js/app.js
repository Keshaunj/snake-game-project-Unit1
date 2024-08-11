
const directions = {
    up: {x: 0, y: -1},
    down: {x: 0, y: 1},
    left: {x: -1, y: 0},
    right: {x: 1, y: 0}
};

const body = document.getElementById("snakebody")
const board = document.getElementById("board")

let position = {x:0,y:0}; 
let stepSize = 100;
const snakeSegments = [body];





function moveSnake(direction) {
     position.x += direction.x * stepSize;
     position.y += direction.y * stepSize;
     

     

if (position.x < 0) position.x = 0; 
if (position.y < 0) position.y = 0;

if (position.x > board.clientWidth - body.clientWidth) {
     position.x = board.clientWidth - body.clientWidth; 
 }
 
 if (position.y > board.clientHeight - body.clientHeight) {
     position.y = board.clientHeight - body.clientHeight; 
 }

body.style.left = `${position.x}px`;
body.style.top = `${position.y}px`;  

}



const element = document.querySelector('div');
const width = element.clientWidth;
const hieght = element.clientHeight;



function checkEggAction() {
   
    const eggs = document.querySelectorAll('.egg')
  
    eggs.forEach((egg) => {
      let xD = egg.style.left
      let yD = egg.style.top
      
      const eggLocation = {
        x: parseInt(xD.slice(0, xD.length - 2), 10),
        y: parseInt(yD.slice(0, yD.length - 2), 10),
      }
  
      const tolerance = 45
  
      
      if (
        Math.abs(position.x - eggLocation.x) < tolerance &&
        Math.abs(position.y - eggLocation.y) < tolerance
      ) {
        egg.remove()
        checkForWin()
        
      }
    })
  }
 




document.addEventListener('keydown',function(event){
    
     switch (event.key){
          case 'ArrowUp':
               mvfront();
               break;
               case 'ArrowDown':
                    mvdown();
                    break;
                    case 'ArrowLeft':
                         mvLeft()
                         break;
                         case 'ArrowRight':
                              mvright();
                              break;

}
checkEggAction();
});

for (let i = 0; i < 7; i++) {
    
 }


function mvfront(){
      moveSnake(directions.up);
checkEggAction();
}

function mvdown(){
     moveSnake(directions.down);
     checkEggAction();
}

function mvLeft() {
    moveSnake(directions.left);
    checkEggAction();
}
function mvright(){
     moveSnake(directions.right);
     checkEggAction();
}



function seeEgg() {
     
     const egg = document.createElement("div");
     egg.classList.add("egg");
     egg.style.backgroundColor = "brown"; 
     egg.style.width = "40px";
     egg.style.height = "40px";

     const boardWidth = board.clientWidth;
     const boardHeight = board.clientHeight;
     const eggSize = 40; 
 
     const xaxis = Math.floor(Math.random() * (boardWidth / eggSize)) * eggSize;
     const yaxis = Math.floor(Math.random() * (boardHeight / eggSize)) * eggSize;
 
     egg.style.left = `${xaxis}px`;
     egg.style.top = `${yaxis}px`;
     egg.style.position = "absolute";
 
     board.appendChild(egg);
 }

 


 
 for (let i = 0; i < 7; i++) {
     seeEgg();
 }
 function checkForWin() {
     if (!document.querySelector('.egg')) {
         
         const winnerMessage = document.createElement("div");
         winnerMessage.textContent = "You won! All eggs have been eaten.";
         winnerMessage.style.cssText = `
         font-size: 24px;
         color: black;
         text-align: center;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
     `;
     
         board.appendChild(winnerMessage);
     }
 }

 function restartGame() {
   
    position = {x: 0, y: 0};
    body.style.left = `${position.x}px`;
    body.style.top = `${position.y}px`;


    const eggs = document.querySelectorAll('.egg');
    eggs.forEach(egg => egg.remove());

    for (let i = 0; i < 7; i++) {
        seeEgg();
    }


    const winMessage = document.querySelector('.winner-message');
    if (winMessage) {
        winMessage.remove();
    }
}

document.getElementById('restartButton').addEventListener('click', restartGame);