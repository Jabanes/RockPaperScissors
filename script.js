//rock paper scissors:

ar = ["rock", "paper", "scissors"]


let userScore = 0
let botScore = 0


function submit() {
    
    function showResult() {

        if (botPick != userPick) {
    
            if (botPick == "rock" && userPick == "scissors") {
                
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");
                return botScore += 1
    
            }
            else if (botPick == "paper" && userPick == "rock") {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");
                return botScore += 1

                
            }
            else if (botPick == "scissors" && userPick == "paper") {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");
                return botScore += 1

            }
            else {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Win!`
                console.log("You win!");
                userScore += 1
               
    
            }
    
        }
        else {
            document.getElementById("userpick").textContent = `You Picked: ${userPick}`
            document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
            document.getElementById("Result").textContent = `Thats a tie!`
            console.log("Thats a tie!");
    
        }
    
    }
    

    let userPick = document.getElementById("Pick").value;
    let botPick = ar[Math.floor(Math.random() * ar.length)];
    console.log(`userPick: ${userPick}`);
    console.log(`botPick: ${botPick}`);

    if (ar.includes(userPick)) {

        showResult()
    }

    else {
        console.log("Invalid Choice");
    }

    document.getElementById("userscore").textContent = `You: ${userScore}`
    document.getElementById("botscore").textContent = `Bot: ${botScore}`
    return 
}



