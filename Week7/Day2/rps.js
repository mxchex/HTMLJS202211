//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var shoot = new Image();
var hshoot = new Image();

rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"
shoot.src = "images/shoot.jpg"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"
hshoot.src = "images/shoot2.jpg"

hscissors.onload = function(){
    draw(rock,paper,scissors,shoot,rock,paper,scissors,shoot);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select rock, paper, scissors, shoot above."

function onKeyDown(e){
    console.log(e.keyCode);

}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar")
        gameOver = false;
        draw(rock,paper,scissors,shoot,rock,paper,scissors,shoot);
    }
}


function draw(rock, paper, scissors, shoot, crock, cpaper, cscissors, cshoot){
    if(gameOver == true){
        //drawing the fonts
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white"
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the RPS Game!", canvas.width/2, 280);
        ctx.fillText("Press Space to Start!", canvas.width/2, 330);
        ctx.strokeText("Welcome to the RPS Game!", canvas.width/2, 280);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Times New Roman"
        ctx.textAlign = "center"
        ctx.fillStyle = "black";
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 175, 150);
        ctx.drawImage(paper, canvas.width/2 - paper.width/2 - 50, 150);
        ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 75, 150);
        ctx.drawImage(shoot, canvas.width/2 - shoot.width/2 + 175, 150);
        //computer choices
        ctx.fillText("Computer Choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2 - crock.width/2 - 175, 375);
        ctx.drawImage(cpaper, canvas.width/2 - cpaper.width/2 - 50, 375);
        ctx.drawImage(cscissors, canvas.width/2 - cscissors.width/2 + 75, 375);
        ctx.drawImage(cshoot, canvas.width/2 - shoot.width/2 + 175, 375);

        ctx.fillText(results, canvas.width/2,525);
        ctx.restore();
    }
}


//alert ("select rock, paper, or scissors!")
var rps = ["rock","paper","scissors","shoot"];
//console.log(rps[2]);

document.getElementById("rock").addEventListener('click', function (e) {//alert("You picked " + rps[0]);
playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function(e){//alert("You picked " + rps[1]);
playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function(e){//alert("You picked " + rps[2]);
playGame(rps[2]);
});
document.getElementById("shoot").addEventListener('click', function(e){//alert("You picked " + rps[2]);
playGame(rps[3]);
});

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }else{
            var cpuChoice = Math.floor(Math.random() * 3.99);
    console.log(cpuChoice, playerChoice);


switch (playerChoice) {
    case "rock":
        if (cpuChoice == 0){
            //rock
            //alert("CPU chose Rock. It's a tie!");
            results = "CPU chose Rock. It's a tie!";
            draw(hrock, paper, scissors, shoot , hrock, paper, scissors, shoot)
        }
        else if (cpuChoice == 1){
            //paper
            //alert("CPU chose Paper. You lose!");
            results = "CPU chose Paper. You lose!";
            draw(hrock, paper, scissors, shoot, rock,hpaper,scissors, shoot)
        }
        else if (cpuChoice == 2) {
            //scissors
            //alert("CPU chose Scissor. You win!");
            results = "CPU chose Scissor. You win!";
            draw(hrock, paper, scissors, shoot, rock, paper, hscissors, shoot)
        }
        else {
            //shoot
            //alert("CPU chose Shoot. You lose!");
            results = "CPU chose Shoot. You lose!";
            draw(hrock, paper, scissors, rock, paper, scissors, hshoot)
        }

        break;

        case "paper":
        if (cpuChoice == 0){
            //rock
            //alert("CPU chose Rock. You win!");
            results = "CPU chose Rock. You win!"
            draw(rock, hpaper, scissors, shoot, hrock, paper, scissors, shoot)
        }
        else if (cpuChoice == 1){
            //paper
            //alert("CPU chose Paper. It's a tie!");
            results = "CPU chose Paper. It's a tie!"
            draw(rock, hpaper, scissors, shoot, rock, hpaper, scissors, shoot)
        }
        else if (cpuChoice == 2){
            //scissors
            //alert("CPU chose Scissor. You lose!");
            results = "CPU chose Scissor. You lose!"
            draw(rock, hpaper, scissors, shoot, rock, paper, hscissors, shoot)
        }
        else {
            //shoot
            //alert("CPU chose Shoot. You lose!");
            results = "CPU chose Shoot. You lose!";
            draw(hrock, paper, scissors, shoot, rock, paper, scissors, hshoot)
        }
        
        break;
    case "scissors":
        if (cpuChoice == 0) {
            //rock
            //alert("CPU chose Rock. You lose!");
            results = "CPU chose Rock. You lose!"
            draw(rock, paper, hscissors, shoot, hrock, paper, scissors, shoot)
        }
        else if (cpuChoice == 1) {
            //paper
            //alert("CPU chose Paper. You win!");
            results = "CPU chose Paper. You win!"
            draw(rock, paper, hscissors, shoot, rock, hpaper, scissors, shoot)
        }
        else if (cpuChoice == 2){
            //scissors
            //alert("CPU chose Scissor. It's a tie!");
            results = "CPU chose Scissor. It's a tie!"
            draw(rock, paper, hscissors, shoot, rock, paper, hscissors, shoot)
        }
        else {
            //scissors
            //alert("CPU chose Scissor. It's a tie!");
            results = "CPU chose Shoot. You lose!"
            draw(rock, paper, hscissors, shoot, rock, paper, scissors, hshoot)
        }
        
        break;
        case "shoot":
            if (cpuChoice == 0) {
                //rock
                //alert("CPU chose Rock. You lose!");
                results = "CPU chose Rock. You win!"
                draw(rock, paper, scissors, hshoot, hrock, paper, scissors, shoot)
            }
            else if (cpuChoice == 1) {
                //paper
                //alert("CPU chose Paper. You win!");
                results = "CPU chose Paper. You win!"
                draw(rock, paper, scissors, hshoot, rock, hpaper, scissors, shoot)
            }
            else if (cpuChoice == 2){
                //scissors
                //alert("CPU chose Scissor. It's a tie!");
                results = "CPU chose Scissor. You win!"
                draw(rock, paper, scissors, hshoot, rock, paper, hscissors, shoot)
            }
            else {
                //scissors
                //alert("CPU chose Scissor. It's a tie!");
                results = "CPU chose Shoot. It's a tie!"
                draw(rock, paper, scissors, hshoot, rock, paper, scissors, hshoot)
            }
            
            break;
    }   
   }

}
