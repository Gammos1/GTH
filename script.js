var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
var speed = 0;
var score_num = 0;
var score = document.getElementById("score");
var lastScore_txt = document.getElementById("lastscore");
var lastScore = 0;
var stuff = 0;

function cursorMove(event){
    speed = 2;
    var left = event.clientX - 25;
    if(left > 0 && left < 280) {
        character.style.left = left + "px";
    } else if(left <= 0) {
        character.style.left = 0 + "px";
    } else if(left >= 280) {
        character.style.left = 280 + "px";
    }
}

function touchMove(event){
    speed = 2;
    var left = event.touches[0].clientX;
    if(left > 0 && left < 280) {
        character.style.left = left + "px";
    } else if(left <= 0) {
        character.style.left = 0 + "px";
    } else if(left >= 280) {
        character.style.left = 280 + "px";
    }
}

document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        } 
        if(event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
})

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
})

var blocks = setInterval(function(){
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("hole"+(counter-1));
    if(counter>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(blockLastTop<400 || counter==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        var random = Math.floor(Math.random() * 200) + 50;
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
        score_num++;
    }
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    if(characterTop <= 0){
        score_num = 0
        score.innerHTML = "Score: " + 0;
        lastScore_txt.innerHTML = "Highscore: " + lastScore;
        character.style.top = 440 + "px";
        characterTop = 440;
    }
    for(var i = 0; i < currentBlocks.length; i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 * speed + "px";
        ihole.style.top = iblockTop - 0.5 * speed + "px";
        if(iblockTop < 0){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(iblockTop-25 < characterTop && iblockTop > characterTop){
            drop++;
            if(iholeLeft <= characterLeft && iholeLeft+20 >= characterLeft){
                drop = 0;
            }
        }
        if(lastScore < score_num) {lastScore = score_num;}
        score.innerHTML = "Score: " + score_num;
    }
    if(drop==0){
        if(characterTop < 480){
            character.style.top = characterTop + 2 + "px";
        }
    } else {
        character.style.top = characterTop - 0.5 + "px";
    }
},1);


var character2 = document.getElementById("character2");
var game2 = document.getElementById("game2");

document.addEventListener("keydown", event => {
        if(event.key === "a") {
            move(character2, "left", 5);
            both++;
        } 
        if(event.key === "d") {
            move(character2, "right", 5);
        }
        if(event.key === "w") {
            move(character2, "up", 5);
        }
        if(event.key === "s") {
            move(character2, "down", 5);
        }
});



function move(e, dir, d) {
    switch(dir) {
        case "left":
            var interval = setInterval(function() {
                var left = parseInt(window.getComputedStyle(e).getPropertyValue("left"));
                if(left > 0){e.style.left = left - d + "px";}
                document.addEventListener("keyup", event => {
                    clearInterval(interval);
                });
            },1);
        break;
        case "right":
            var interval = setInterval(function() {
                var left = parseInt(window.getComputedStyle(e).getPropertyValue("left"));
                if(left < 770){e.style.left = left + d + "px";}
                document.addEventListener("keyup", event => {
                    clearInterval(interval);
                });
            },1);
        break;
        case "up":
            var interval = setInterval(function() {
                var top = parseInt(window.getComputedStyle(e).getPropertyValue("top"));
                if(top > 0){e.style.top = top - d + "px";}
                document.addEventListener("keyup", event => {
                    clearInterval(interval);
                });
            },1);
        break;
        case "down":
            var interval = setInterval(function() {
                var top = parseInt(window.getComputedStyle(e).getPropertyValue("top"));
                if(top < 470){e.style.top = top + d + "px";}
                document.addEventListener("keyup", event => {
                    clearInterval(interval);
                });
            },1);
        break;
    }
}
