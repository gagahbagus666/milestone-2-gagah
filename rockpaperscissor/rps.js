class Start {
    constructor() {
        this.playerName = "Kamu";
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
}

function pickOption(gesture) {
    const start = new Start();
    start.setPlayerOption = gesture;
    console.log(`Player chose: ${start.getPlayerOption}`);
}

