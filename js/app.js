/* constant and variables*/
const directions = {
    up: {x: 0, y: -1},
    down: {x: 0, y: 1},
    left: {x: -1, y: 0},
    right: {x: 1, y: 0}
};

const body = document.getElementById("snakebody")
const board = document.getElementById("board")

let position = {x:0,y:0}; /* my location of snake on the board*/
let stepSize = 100;
const snakeSegments = [body];
/*------------------------grid for coins to appear on---------------*/


console.log(board)
console.log(`Board Width: ${board.clientWidth}`);
console.log(`Board Height: ${board.clientHeight}`);

/* functions*/

/* function for snakes ability to navaggte through my board*/
function moveSnake(direction) {
     position.x += direction.x * stepSize;
     position.y += direction.y * stepSize;
     console.log(board.clientHeight,board.offsetHeight)

     
/*--------------update postion 0 I think my snake is only operating in the x:0,-0,y:0,-0 axis meaning not postive up out of bounds up etc below*/

/* makes my snake stay in the board fucntion */  
if (position.x < 0) position.x = 0; // Prevent going left
if (position.y < 0) position.y = 0;
/* helping my snake stay in the board*/
if (position.x > board.clientWidth - body.clientWidth) {
     position.x = board.clientWidth - body.clientWidth; // Prevent going right
 }
 
 if (position.y > board.clientHeight - body.clientHeight) {
     position.y = board.clientHeight - body.clientHeight; // Prevent going down
 }
/* adjsuting my snake body STYLE as it moves*/
body.style.left = `${position.x}px`;
body.style.top = `${position.y}px`;  // Changed from `bottom` to `top`

}
/* div styling and size*/


const element = document.querySelector('div');
const width = element.clientWidth;
const hieght = element.clientHeight;

/* move the element by its width height*/
/*element.style.transform = */

/*----------------------   --------------------------  egg eating or not condition-------------------------*/

function checkEggAction() {
     console.log("checkEggAction function called");
     const eggs = document.querySelectorAll('.egg');

 
     eggs.forEach(egg => {
         const eggLocation = {
             x: parseInt(egg.style.left, 10),
             y: parseInt(egg.style.top, 10)
         };
 
         const tolerance = 43; // Adjust tolerance if needed
 
         console.log(`Checking egg at (${eggLocation.x}, ${eggLocation.y}) against snake at (${position.x}, ${position.y})`);
 
         if (Math.abs(position.x - eggLocation.x) < tolerance &&
             Math.abs(position.y - eggLocation.y) < tolerance) {
             egg.remove();
             console.log("Egg eaten!");
             growSnake();
         }
     });
 }
 


/* this next function  below helps my snakebbODY STAY IN THE BOARD */    /*im assmung 0 is out of boards because it closer to null */

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
// Create multiple eggs
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
/*---------------------------------------------------------------more eggs----------------------*/


function seeEgg() {
     console.log("seeEgg function called") /*--test*/
     const egg = document.createElement("div");
     egg.classList.add("egg");
     egg.style.backgroundColor = "green"; // Set color to green
     egg.style.width = "40px";
     egg.style.height = "40px";

     const boardWidth = board.clientWidth;
     const boardHeight = board.clientHeight;
     const eggSize = 40; // Size of the egg
 
     const xaxis = Math.floor(Math.random() * (boardWidth / eggSize)) * eggSize;
     const yaxis = Math.floor(Math.random() * (boardHeight / eggSize)) * eggSize;
 
     egg.style.left = `${xaxis}px`;
     egg.style.top = `${yaxis}px`;
     egg.style.position = "absolute";
 
     board.appendChild(egg);
 }

 
/*-----------------*/
 
 // adding my snake segment function for the growing action
 function growSnake() {
     const lastSegment = snakeSegments[snakeSegments.length - 1];
     const newSegment = document.createElement("div");
     newSegment.classList.add("snake-segment");
 
     // Set the position of the new segment based on the last segment
     newSegment.style.left = `${lastSegment.offsetLeft}px`;
     newSegment.style.top = `${lastSegment.offsetTop}px`;
 
     // Add the new segment to the board and the snake segments array
     board.appendChild(newSegment);
     snakeSegments.push(newSegment);
 }
 
 for (let i = 0; i < 7; i++) {
     seeEgg();
 }
 function checkForWin() {
     if (!document.querySelector('.egg')) {
         // Display win message
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
 