console.log("hi")
const directions = {
    up: {x: 0, y: 1},
    down: {x: 0, y: -1},
    left: {x: -1, y: 0},
    right: {x: 1, y: 0}
};

const body = document.getElementById("snakebody")
const land = document.getElementById("board")

function mvfront(){
     const directions = directions.up;

}

function mvdown(){
     const directions= directions.down;
}

function mvLeft(){
    const directions = directions.left;
}
function mvright(){
     const directions = directions.right;
}
document.addEventListener("DOMContentLoaded")
