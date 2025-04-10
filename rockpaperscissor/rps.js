class Start {
    constructor() {
        this.playerName = "You";
        this.botName = "Dark Entity";
        this.playerOption = null;
        this.botOption = null;
        this.winner = "";
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption;
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const options = ["✊", "🖐️", "✌️"];
        const bot = Math.floor(Math.random() * options.length);
        this.botOption = options[bot];
        console.log("Dark Entity chose: ", this.botOption);
    }
}

function pickOption(gesture) {
    const start = new Start();
    start.setPlayerOption = gesture;
    start.botBrain();
    console.log(`Player chose: ${start.getPlayerOption}`);
    console.log(`Dark Entity chose: ${start.getBotOption}`);
    console.log("Winner:", start.winner);

    if (start.getPlayerOption === start.getBotOption) {
        start.winner = "Draw is Not an Option!";
    } else if (
        (start.getPlayerOption === "✊" && start.getBotOption === "✌️") ||
        (start.getPlayerOption === "🖐️" && start.getBotOption === "✊") ||
        (start.getPlayerOption === "✌️" && start.getBotOption === "🖐️")
    ) {
        start.winner = "You Win, I Spare Your Life For Now!";
    } else {
        start.winner = "Your Soul is Mine!";
    }

    
        const inGame = document.getElementById("in-game");
        const result = document.getElementById("result");

        inGame.textContent = "Dark Entity Scan Your Thought"

setTimeout(() => {
        inGame.innerHTML = `${start.playerName} chose: ${start.getPlayerOption} <br> 
                            ${start.botName} chose: ${start.getBotOption} <br> 
                            ${start.winner}`;
    }, 2000);
}