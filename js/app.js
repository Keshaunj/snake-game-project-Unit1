/* constant and variables*/
const directions = {
    up: {x: 0, y: 1},
    down: {x: 0, y: -1},
    left: {x: -1, y: 0},
    right: {x: 1, y: 0}
};

const body = document.getElementById("snakebody")
const board = document.getElementById("board")
const points = document.getElementById("egg")
let position = {x:0,y:0}; /* my location of snake on the board*/
let stepSize = 100;

/*------------------------grid for coins to appear on---------------*/
const cells = []
for(let i = 1; i <= 49; i++)
cells.push(i)
/*-----------------------------------coins disappear function---------------*/

function seeEgg(){
     const egg = document.createElement("div");
     egg.classList.add("egg");
   
     const xaxis = Math.floor(Math.random()*7) * 100;
     const yaxis = Math.floor(Math.random()*7) * 100;
     egg.style.left = `${xaxis}px`;
     egg.style.top = `${yaxis}px`;
     egg.style.position = "absolute";
     document.getElementById("board").appendChild(egg);
   }
seeEgg()
seeEgg()
seeEgg()



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
     position.y = board.clientHeight - body.clientHeight; // Prevent going up
 }
/* adjsuting my snake body STYLE as it moves*/
body.style.left = `${position.x}px`;
body.style.bottom = `${position.y}px`;
}
/* div styling and size*/


const element = document.querySelector('div');
const width = element.clientWidth;
const hieght = element.clientHeight;

/* move the element by its width height*/
element.style.transform = 
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
});



function mvfront(){
      moveSnake(directions.up);

}

function mvdown(){
     moveSnake(directions.down);
}

function mvLeft(){
    moveSnake(directions.left);
}
function mvright(){
     moveSnake(directions.right);
}

/*-----------------------------------coins disappear function---------------*/

