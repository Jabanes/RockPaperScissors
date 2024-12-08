//rock paper scissors:

ar = ["rock", "paper", "scissors"]

function submit() {
    let userPick = document.getElementById("Pick").value;
    let botPick = ar[Math.floor(Math.random() * ar.length)];
    console.log(`userPick: ${userPick}`);
    console.log(`botPick: ${botPick}`);

    if (ar.includes(userPick)) {

        if (botPick != userPick) {

            if (botPick == "rock" && userPick == "scissors") {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");

            }
            else if (botPick == "paper" && userPick == "rock") {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");
            }
            else if (botPick == "scissors" && userPick == "paper") {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Lose!`
                console.log("You lose!");
            }
            else {
                document.getElementById("userpick").textContent = `You Picked: ${userPick}`
                document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
                document.getElementById("Result").textContent = `You Win!`
                console.log("You win!");

            }

        }
        else {
            document.getElementById("userpick").textContent = `You Picked: ${userPick}`
            document.getElementById("botpick").textContent = `Bot Picked: ${botPick}`
            document.getElementById("Result").textContent = `Thats a tie!`
            console.log("Thats a tie!");

        }

    }
    else {
        console.log("Invalid Choice");
    }
}