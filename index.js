function randomNumber(){
    const choice = Math.floor(Math.random()*3);
    return choice;
}
var computerchoice;
function getRandomChoice(){
    computerchoice = randomNumber();
    switch (computerchoice) {
        case 0:
            document.querySelector(".img-container div h3").innerHTML = "The computer chose rock";
            document.querySelector("#computerchoice img").src="./public/download.png";
            break;
        case 1:
            document.querySelector(".img-container div h3").innerHTML = "The computer chose paper";
            document.querySelector("#computerchoice img").src="./public/icon_477912_edited.png";
            break;
        case 2:
            document.querySelector(".img-container div h3").innerHTML = "The computer chose scissors";
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
     compareResults();
    };
    document.getElementById("paper").onclick = function(){
    mychoice = 1;
      getMyChoice();
      getRandomChoice();
      compareResults();
    };
    document.getElementById("scissors").onclick = function(){
    mychoice = 2;
      getMyChoice();
      getRandomChoice();
      compareResults();
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

function compareResults(){
    switch (mychoice) {
        case 0:
            if(computerchoice == 1){
                document.getElementById("result").innerHTML = "No luck. The computer won."
            }
            else if(computerchoice == 2){
                document.getElementById("result").innerHTML = "Congrates! You won!!"
            }
            else{
                document.getElementById("result").innerHTML = "Draw."
            }
            break;
            case 1:
                if(computerchoice == 2){
                    document.getElementById("result").innerHTML = "No luck. The computer won."
                }
                else if(computerchoice == 0){
                    document.getElementById("result").innerHTML = "Congrates! You won!!"
                }
                else{
                    document.getElementById("result").innerHTML = "Draw."
                }
            break;
            case 2:
            if(computerchoice == 0){
                document.getElementById("result").innerHTML = "No luck. The computer won."
            }
            else if(computerchoice == 1){
                document.getElementById("result").innerHTML = "Congrates! You won!!"
            }
            else{
                document.getElementById("result").innerHTML = "Draw."
            }
            break;
    
        default:
            break;
    }

}