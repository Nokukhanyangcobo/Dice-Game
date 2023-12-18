
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-output').innerText = `🎲 ${diceValue}`;

    if (diceValue !== 1) {
        // Add the dice value to the current player's score
        currentPlayer === 1 ? player1Score += diceValue : player2Score += diceValue;
    } else {
        // Switch to the next player if a 1 is rolled
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }

    // Update the displayed scores
    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;

    // Check for a winner
    if (player1Score >= 20 || player2Score >= 20) {
        endGame();
    } else {
        // Update the player turn message
        document.getElementById('player-turn').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function newGame() {
    // Reset game state
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;

    // Reset UI
    document.getElementById('dice-output').innerText = '🎲';
    document.getElementById('player1-score').innerText = '0';
    document.getElementById('player2-score').innerText = '0';
    document.getElementById('player-turn').innerText = 'Player 1\'s turn';
}

function endGame() {
    // Display the winner
    document.getElementById('player-turn').innerText = `Player ${currentPlayer} wins!`;
}