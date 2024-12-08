//rock paper scissors:

ar = ["rock", "paper", "scissors"]


let userScore = 0
let botScore = 0
round = 1

function reset() {
    userScore = 0
    botScore = 0
    document.getElementById("userscore").textContent = `You: `
    document.getElementById("botscore").textContent = `Bot: `
    round = 1
    return
}

function submit() {

    document.getElementById("Round").textContent = `Round: ${round}`
    round += 1
    console.log(`round: ${round}`);
    while (round <= 10) {

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

        document.getElementById("winner").textContent = ``;
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
    if (userScore > botScore) {
        document.getElementById("winner").textContent = `CONGRATULATIONS!, YOU WON THE GAME!`;
        reset()
        return
    }
    else {
        document.getElementById("winner").textContent = `sorry, you lost the game...`;
        reset()
        return
    }


}





