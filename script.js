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
            output += `<div class="${worldGlossary[world[i][j]]}"></div>`;
        }
        output += `</div>`;
    }
    document.querySelector(".world").innerHTML = output;

    // alert("Let's play Pacman!");
}
displayWorld();


var pacmanPosition = {
    y: 2,
    x: 2
}

function placePacman() {
    pacman.style.top = pacmanPosition.y * 20 + "px";
    pacman.style.left = pacmanPosition.x * 20 + "px";

    console.log(`after updating position: \ny:${pacmanPosition.y}  x:${pacmanPosition.x}`)
}
placePacman();

document.onkeydown = function(event) {
    // the world array in the conditionals subtract 1 from each x/y coordinate b/c arrays start at position 0

    if(event.key == "ArrowDown" && world[pacmanPosition.y][pacmanPosition.x-1] != 1) { 
        console.log(`keypress: ${event.key}`);
        console.log(`previous position type: ${worldGlossary[world[pacmanPosition.y-1][pacmanPosition.x-1]]}`);
        //want to move down - must add 1 to outer array (y)
        console.log(`new position should be: \ny:${pacmanPosition.y+1}  x:${pacmanPosition.x}`);
        console.log(`new position type: ${worldGlossary[world[pacmanPosition.y][pacmanPosition.x-1]]}`);
        
        pacman.style.transform = `rotate(90deg)`;
        pacmanPosition.y++;
    }
    else if(event.key == "ArrowRight" && world[pacmanPosition.y-1][pacmanPosition.x] != 1) {
        console.log(`keypress: ${event.key}`);
        console.log(`previous position type: ${worldGlossary[world[pacmanPosition.y-1][pacmanPosition.x-1]]}`);
        //want to move right - must add 1 to inner array (x)
        console.log(`new position should be: \ny:${pacmanPosition.y}  x:${pacmanPosition.x+1}`);
        console.log(`new position type: ${worldGlossary[world[pacmanPosition.y][pacmanPosition.x+1]]}`);

        pacman.style.transform = `rotate(0deg)`;
        pacmanPosition.x++;
    }
    else if(event.key == "ArrowUp" && world[pacmanPosition.y-2][pacmanPosition.x-1] != 1) {
        console.log(`keypress: ${event.key}`);
        console.log(`previous position type: ${worldGlossary[world[pacmanPosition.y-1][pacmanPosition.x-1]]}`);
        //want to move up - must subtrack 1 from the outer array (y)
        console.log(`new position should be: \ny:${pacmanPosition.y-1}   x:${pacmanPosition.x}`);
        console.log(`new position type: ${worldGlossary[world[pacmanPosition.y][pacmanPosition.x+1]]}`);
        
        pacman.style.transform = `rotate(270deg)`;
        pacmanPosition.y--;
    }
    else if(event.key = "ArrowLeft" && world[pacmanPosition.y-1][pacmanPosition.x-2] != 1) {  
        console.log(`keypress: ${event.key}`);
        console.log(`previous position type: ${worldGlossary[world[pacmanPosition.y-1][pacmanPosition.x-1]]}`);
        //want to move left - must subtract 1 from the inner array (x)
        console.log(`new position should be: \ny:${pacmanPosition.y}   x:${pacmanPosition.x-1}`);
        console.log(`new position type: ${worldGlossary[world[pacmanPosition.y][pacmanPosition.x+1]]}`);
        
        pacman.style.transform = `rotate(180deg)`;
        pacmanPosition.x--;
    }
    placePacman();
}