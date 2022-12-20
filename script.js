var worldGlossary = {
    0: "empty",
    1: "wall",
    2: "coin",
    3: "large-coin",
    4: "cherry"
}
var world1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,3,2,1],
    [1,1,1,1,1,1,1,1,2,1],
    [1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,1,1,1,2,1],
    [1,2,1,1,2,1,1,1,2,1],
    [1,2,1,1,2,1,1,1,2,1],
    [1,3,1,1,2,1,1,1,1,1],
    [1,2,1,1,2,2,2,3,2,1],
    [1,1,1,1,1,1,1,1,1,1]
]
var world2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,3,2,1,2,2,2,2,1,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,3,1,1],
    [1,2,2,2,2,1,1,1,2,1,2,1,1,2,1,1],
    [1,2,1,1,2,1,1,1,2,1,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1],
    [1,3,1,1,2,1,1,1,1,1,1,1,1,2,1,1],
    [1,2,1,1,2,2,2,3,2,2,2,2,2,2,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var world3 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1],
    [1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1],
    [1,2,2,1,2,2,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1],
    [1,1,2,2,2,1,1,1,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var world = worldToDisplay();

function worldToDisplay() {
    var worldToBuild;
    var level = document.getElementById("level").innerText;
    if (level == 1) {
        worldToBuild = world1;
    } else if(level == 2) {
        worldToBuild = world2;
    }else if(level == 3) {
        worldToBuild = world3;
    }
    return worldToBuild;
}

function displayWorld() {
    var output = '';
    for(var i=0; i<world.length; i++) {
        output += `<div class="row">`;
        for(var j=0; j<world[i].length; j++){
            output += `\t<div class="${worldGlossary[world[i][j]]}"></div>`;
        }
        output += `</div>`;
    }
    document.querySelector(".world").innerHTML = output;

    // alert("Let's play Pacman!");
}
displayWorld();


var pacmanPosition = {
    x: 2,
    y: 2
}
function placePacman() {
    // if(type == "start") {
    //     pacman.style.left = pacmanPosition.y * 20 + "px";
    //     pacman.style.top = pacmanPosition.x * 20 + "px";
    // } else {
    //     pacman.style.left = pacmanPosition.y * 20 + "px";
    //     pacman.style.top = pacmanPosition.x * 20 + "px";
    // }
    pacman.style.left = pacmanPosition.x * 20 + "px";
    pacman.style.top = pacmanPosition.y * 20 + "px";

    console.log(`y: ${pacmanPosition.y} \nx: ${pacmanPosition.x}`)
}
placePacman();

document.onkeydown = function(event) {
    if(event.key == "ArrowDown" && world[pacmanPosition.y][pacmanPosition.x-1] != 1) {
        console.log(`keypress: ${event.key}`);
        pacman.style.transform = `rotate(90deg)`;
        pacmanPosition.y++;
    }
    else if(event.key == "ArrowRight" && world[pacmanPosition.y-1][pacmanPosition.x] != 1) {
        console.log(`keypress: ${event.key}`);
        pacman.style.transform = `rotate(0deg)`;
        pacmanPosition.x++;
    }
    else if(event.key == "ArrowUp" && world[pacmanPosition.y-2][pacmanPosition.x-1] != 1) {
        console.log(`keypress: ${event.key}`);
        pacman.style.transform = `rotate(270deg)`;
        pacmanPosition.y--;
    }
    else if(event.key = "ArrowLeft" && world[pacmanPosition.y-1][pacmanPosition.x-2] != 1) { 
        console.log(`keypress: ${event.key}`);
        pacman.style.transform = `rotate(180deg)`;
        pacmanPosition.x--;
    }
    placePacman();
}