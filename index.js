for(var i =0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , handleClick)
}
document.addEventListener("keydown", handleClick)

function handleClick(event){
    var computerScore = Math.floor((Math.random() * 3)+1);
    console.log(computerScore)
var buttonInnerHTML = this.innerHTML;
var buttonPressInnerHTML = event.key;

switch (buttonInnerHTML || buttonPressInnerHTML) {
        case "r": 
        var rock = new Audio("sounds/rock.mp3"); 
        var userChoice = 1 
        console.log(userChoice)
        rock.play();
        break; 

        case "p": 
        var paper = new Audio("sounds/paper.mp3"); 
        var userChoice = 2
        console.log(userChoice)
        paper.play(); 
        break; 

        case "s":
        var scissors = new Audio("sounds/scissors.mp3");
        var userChoice = 3 
        console.log(userChoice)
        scissors.play();
        break;

        case "t":
        var tumTum = new Audio("sounds/TUMTUM.mp3");
        tumTum.play();

    default:
        console.log(buttonInnerHTML);
        break;
}
    if (userChoice == computerScore) {
        document.querySelector("h1.winlosedraw").innerHTML = ("It's A DRAW?")
    }
    else if (userChoice == 1 && computerScore == 3 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You WIN! Tum Tum Tum Sahur Chose Scissors")
    }
    else if (userChoice == 1 && computerScore == 2 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You Lose! Tum Tum Tum Sahur Chose Paper")
    }
    else if (userChoice == 2 && computerScore == 3 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You Lose! Tum Tum Tum Sahur Chose Scissors")
    }
    else if (userChoice == 2 && computerScore == 1 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You WIN! Tum Tum Tum Sahur Chose Rock")
    }
    else if (userChoice == 3 && computerScore == 2 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You WIN! Tum Tum Tum Sahur Chose Paper")
    }
    else if (userChoice == 3 && computerScore == 1 ) {
        document.querySelector("h1.winlosedraw").innerHTML = ("You Lose! Tum Tum Tum Sahur Chose Rock")
    }
}


