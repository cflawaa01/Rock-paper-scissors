function randomNumber(){
    const choice = Math.floor(Math.random()*3);
    return choice;
}
var randomChoice = ""
function getRandomChoice(){
    switch (randomNumber()) {
        case 0:
            randomChoice = "The computer chose rock";
            document.querySelector(".img-container div h3").innerHTML = randomChoice;
            document.querySelector("#computerchoice img").src="./public/download.png";
            break;
        case 1:
            randomChoice = "The computer chose paper";
            document.querySelector(".img-container div h3").innerHTML = randomChoice;
            document.querySelector("#computerchoice img").src="./public/icon_477912_edited.png";
            break;
        case 2:
            randomChoice = "The computer chose scissors";
            document.querySelector(".img-container div h3").innerHTML = randomChoice;
            document.querySelector("#computerchoice img").src="./public/icon_477919_edited.png";
        break;

        default:
            break;
    }

}
var mychoice;
    document.getElementById("rock").onclick = function(){
     mychoice = 0;
     getMyChoice();
     getRandomChoice();
    };
    document.getElementById("paper").onclick = function(){
    mychoice = 1;
      getMyChoice();
      getRandomChoice();
    };
    document.getElementById("scissors").onclick = function(){
    mychoice = 2;
      getMyChoice();
      getRandomChoice();
    };
function getMyChoice(){
    switch (mychoice) {
        case 0:
            document.querySelector("#yourchoice h3").innerHTML = "You chose rock";
            document.querySelector("#yourchoice img").src="./public/download.png";
            break;
        case 1:
            document.querySelector("#yourchoice h3").innerHTML = "You chose paper";
            document.querySelector("#yourchoice img").src="./public/icon_477912_edited.png";
        break;
        case 2:
            document.querySelector("#yourchoice h3").innerHTML = "You chose scissors";
            document.querySelector("#yourchoice img").src="./public/icon_477919_edited.png";
        break;
    
        default:
            break;
    }
}

