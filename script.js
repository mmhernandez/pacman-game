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

var world = worldToDisplay();
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
    pacman.style.left = pacmanPosition.x * 20 + "px";
    pacman.style.top = pacmanPosition.y * 20 + "px";
}
placePacman();

document.onkeydown = function(event) {
    //MOVE UP = 38
    if(event.keyCode == 38 && (world[pacmanPosition.y - 1][pacmanPosition.x] != 1)) {
        pacmanPosition.y--;
    }
    //MOVE RIGHT = 39
    else if(event.keyCode == 39 && (world[pacmanPosition.y][pacmanPosition.x + 1] != 1)) {
        pacmanPosition.x++;
    }
    //MOVE DOWN = 40
    else if(event.keyCode == 40 && (world[pacmanPosition.y + 1][pacmanPosition.x]) != 1) {
        pacmanPosition.y++;
    }
    //MOVE LEFT = 37
    else if(event.keyCode == 37 && (world[pacmanPosition.y][pacmanPosition.x - 1] != 1)) {
        pacmanPosition.x--;
    }
    placePacman();
}