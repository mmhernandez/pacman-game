var worldGlossary = {
    0: "empty",
    1: "wall",
    2: "coin",
    3: "large-coin",
    4: "cherry"
}
var world1MaxPoints = 32;
var world1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,3,2,1],
    [1,1,1,1,1,1,1,1,2,1],
    [1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,1,1,1,2,1],
    [1,2,1,1,2,1,1,1,2,1],
    [1,2,1,1,2,1,1,1,2,1],
    [1,3,1,1,2,1,1,1,2,1],
    [1,2,1,1,2,2,2,3,2,1],
    [1,1,1,1,1,1,1,1,1,1]
]
var world2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,3,2,1,2,4,2,2,1,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1],
    [1,2,1,1,1,1,1,1,2,1,2,1,1,3,1,1],
    [1,2,2,2,2,1,1,1,2,1,2,1,1,2,1,1],
    [1,2,1,1,2,1,1,1,2,1,2,2,2,2,2,1],
    [1,2,2,2,2,4,2,2,2,2,2,1,1,2,1,1],
    [1,3,1,1,2,1,1,1,1,1,1,1,1,2,1,1],
    [1,2,1,1,2,2,2,3,2,2,2,2,2,4,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var world3 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,3,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,0,1],
    [1,2,2,2,2,2,2,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2,2,4,1],
    [1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,2,2,4,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,2,1,1,1,4,1,1,1,1,2,1,1,1,2,1,1,2,1,3,1],
    [1,3,1,1,1,1,1,2,1,1,1,2,2,2,2,2,2,1,1,1,3,1,2,2,1,2,1],
    [1,2,2,2,2,2,3,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2,1],
    [1,2,1,1,1,2,1,2,1,1,0,2,1,1,1,1,2,1,1,1,2,1,1,2,2,2,1],
    [1,2,2,4,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,0,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var world = worldToDisplay();


function worldToDisplay() {
    var worldToBuild;
    var currentLevel = level.innerText;
    if (currentLevel == 1) {
        worldToBuild = world1;
    } else if(currentLevel == 2) {
        worldToBuild = world2;
    }else if(currentLevel == 3) {
        worldToBuild = world3;
        placeGhosts();
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

    evaluateScore();
}
displayWorld();


var pacmanPosition = {
    y: 2,
    x: 2
}

function placePacman() {
    pacman.style.top = pacmanPosition.y * 20 + "px";
    pacman.style.left = pacmanPosition.x * 20 + "px";
}
placePacman();


var moveRightInterval;
var moveDownInterval;
var moveLeftInterval;
var moveUpInterval;

document.onkeydown = function(event) { 
    // clear any other running intervals
    clearIntervals();   

    if(event.key == "ArrowRight") {
        moveRightInterval = setInterval(moveRight, 200);
    }
    else if(event.key == "ArrowDown") {
        moveDownInterval = setInterval(moveDown, 200);
    }
    else if(event.key == "ArrowLeft") {
        moveLeftInterval = setInterval(moveLeft, 200);
    }
    else if(event.key == "ArrowUp") {
        moveUpInterval = setInterval(moveUp, 200);
    }
}

function moveRight() {
    // the world array in the conditionals subtract 1 from each x/y coordinate b/c arrays start at position 0
    if(world[pacmanPosition.y-1][pacmanPosition.x] != 1) {
        //want to move right - must add 1 to inner array (x)
        pacmanPosition.x++
        pacman.style.transform = `rotate(0deg)`;
        updateScore(updateWorld());
        placePacman();
    }    
    else {
        clearInterval(moveRightInterval);
    }
    evaluateScore();
}
function moveDown() {
    // the world array in the conditionals subtract 1 from each x/y coordinate b/c arrays start at position 0
    if(world[pacmanPosition.y][pacmanPosition.x-1] != 1) {
        //want to move down - must add 1 to outer array (y)
        pacmanPosition.y++;
        pacman.style.transform = `rotate(90deg)`;
        updateScore(updateWorld());
        placePacman();
    }    
    else {
        clearInterval(moveDownInterval);
    }
    evaluateScore();
}
function moveLeft() {
    // the world array in the conditionals subtract 1 from each x/y coordinate b/c arrays start at position 0
    if(world[pacmanPosition.y-1][pacmanPosition.x-2] != 1) {
        //want to move left - must subtract 1 from the inner array (x)
        pacmanPosition.x--;
        pacman.style.transform = `rotate(180deg)`;
        updateScore(updateWorld());
        placePacman();
    }    
    else {
        clearInterval(moveLeftInterval);
    }
    evaluateScore();
}
function moveUp() {
    // the world array in the conditionals subtract 1 from each x/y coordinate b/c arrays start at position 0
    if(world[pacmanPosition.y-2][pacmanPosition.x-1] != 1) {
        //want to move up - must subtrack 1 from the outer array (y)
        pacmanPosition.y--;
        pacman.style.transform = `rotate(270deg)`;
        updateScore(updateWorld());
        placePacman();
    }    
    else {
        clearInterval(moveUpInterval);
    }
}

function clearIntervals() {
    // clear any other running intervals
    clearInterval(moveRightInterval);
    clearInterval(moveDownInterval);
    clearInterval(moveLeftInterval);
    clearInterval(moveUpInterval);
}

function updateWorld() {
    //grab the current position before updating it below, so it can be returned when the function ends
    var position = world[pacmanPosition.y-1][pacmanPosition.x-1];

    //update the world, changing the current world[][] element to empty
    world[pacmanPosition.y-1][pacmanPosition.x-1] = 0;
    displayWorld();

    return position;
}

var currentScore = score.innerText;
function updateScore(item) {
    if(item == 2) {
        currentScore++;
    }
    else if(item == 3) {
        currentScore += 2;
    }
    else if(item == 4) {
        currentScore += 50;
    }
    score.innerText = currentScore;
}

function evaluateScore() {
    var countRemainingCoins = 0;
    var countRemainingLargeCoins = 0;
    var countRemainingCherries = 0;

    for(var i=0; i<world.length; i++) {
        for(var j=0; j<world[i].length; j++) {
            if(world[i][j] == 2) {  //2 = coin
                countRemainingCoins++;
            }
            if(world[i][j] == 3) {  //3 = large coin
                countRemainingLargeCoins++;
            }
            if(world[i][j] == 4) {  //4 = cherries
                countRemainingCherries++;
            }
        }
    }

    if(countRemainingCoins == 0 && countRemainingLargeCoins == 0 && countRemainingCherries == 0) {
        clearedLevelMessage.innerText = "You've cleared the level!";
        document.getElementById("nextLevelBtn").style.display = "block";
    }
}

var totalScoreVar;
function nextLevel() {
    //determine the player's current level and increment it
    var level = document.getElementById("level").innerText;
    level++;
    document.getElementById("level").innerText = level;
    
    //determine and display the new world
    world = worldToDisplay();
    displayWorld();

    //add the player's level score to their total score
    totalScoreVar = document.getElementById("totalScore").innerText
    totalScoreVar = parseInt(totalScoreVar) + currentScore;
    document.getElementById("totalScore").innerText = totalScoreVar;

    //hide the level clear/next level information
    clearedLevelMessage.innerText = "";
    document.getElementById("nextLevelBtn").style.display = "none";

    //reset the player's current score
    currentScore = 0;
    score.innerText = currentScore;

    //place the pacman in it's starting position, for the new level
    pacmanPosition.y = 2;
    pacmanPosition.x = 2;
    pacman.style.transform = `rotate(0deg)`;
    placePacman();
}



// function placeGhosts() {
//     var level = document.getElementById("level").innerText;
//     if(level == 3) {
//         placeGreenGhost();

//     }
// }

// var greenGhostPosition = {
//     y: 2,
//     x: 2
// }

// function placeGreenGhost() {
//     green.style.top = greenGhostPosition.y * 20 + "px";
//     green.style.left = greenGhostPosition.x * 20 + "px";
// }