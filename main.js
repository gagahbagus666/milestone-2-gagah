let isLoggedIn = false;
let playerName = "";

function login() {
    if (isLoggedIn) {
        alert(`Earthrealm, Your Name is ${playerName}`);
        return;
    }

    const name = prompt("Enter your name, Earthrealm!");
    if (name) {
        isLoggedIn = true;
        playerName = name;

        localStorage.setItem("playerName", playerName);
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";

        const loginButton = document.getElementById("btn-login");
        loginButton.textContent = `Welcome, ${playerName}`;
        alert(`Welcome, ${playerName}! and Choose Your Fate...`);
    } else {
        alert("You must enter a name Earthrealm!");
    }
}