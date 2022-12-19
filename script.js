var worldGlossary = {
    "0": "empty",
    1: "wall",
    "2": "coin",
    "3": "large-coin",
    "4": "cherry"
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
    [1,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1],
    [1,1,1,1,1,1,1,1,2,1,2,1,1,3,1,1],
    [1,2,2,2,2,1,1,1,2,1,2,1,1,2,1,1],
    [1,2,1,1,2,1,1,1,2,1,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,1,2,2,2,1,1,2,1,1],
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

// var level = document.getElementById("level");

function displayWorld(level) {
    var worldToBuild;
    if (level == 1) {
        worldToBuild = world1;
    } else if(level == 2) {
        worldToBuild = world2;
    }else if(level == 3) {
        worldToBuild = world3;
    }

    var output = '';
    for(var i=0; i<worldToBuild.length; i++) {
        output += `<div class="row">`;
        for(var j=0; j<worldToBuild[i].length; j++){
            output += `\t<div class="${worldGlossary[worldToBuild[i][j]]}"></div>`;
        }
        output += `</div>`;
    }
    document.querySelector(".world").innerHTML = output;
}
displayWorld(2);

// var pacman = {
//     x: 1,
//     y: 1
// }
// function placePacman() {
//     document.getElementById("pacman").style.left = `${pacman.x * 40}px`;
//     document.getElementById("pacman").style.top = `${pacman.y * 40}px`;
// }
// placePacman();

document.onkeydown = function(event) {
    //UP = 38
    if(event.keyCode == 38) {
        console.log("move up");
    }
    //RIGHT = 39
    if(event.keyCode == 39) {
        console.log("move right");
    }
    //DOWN = 40
    if(event.keyCode == 40) {
        console.log("move down");
    }
    //LEFT = 37
    if(event.keyCode == 37) {
        console.log("move left");
    }


}