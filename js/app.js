let game;
const startBtn = document.getElementById('btn__reset');
// start new game when button is clicked
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

const letterBtns = Array.from(document.querySelectorAll('.key'));
letterBtns.forEach(btn => btn.addEventListener('click', e =>  game.handleInteraction(e.target)));