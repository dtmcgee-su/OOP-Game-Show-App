/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [
            new Phrase('Under Your Nose'),
            new Phrase('Roll With the Punches'),
            new Phrase('Hit Below The Belt'),
            new Phrase('Close But No Cigar'),
            new Phrase('Happy as a Clam')
        ];
        this.activePhrase = null;
    }
    /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * game.phrases.length);
        return game.phrases[randomPhrase];
    };
    /**
        * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        const addPhrase = new Phrase(randomPhrase.phrase);
        addPhrase.addPhraseToDisplay();
        this.activePhrase = addPhrase;
        //console.log(overlay);
    };

    // handleInteraction() {


    checkForWin(){
        const lettersRemaining = document.querySelectorAll('.hide');
        if (lettersRemaining.length !== 0) {
            return false
        } else {
            return true
        }
    };

    removeLife() {

        if (this.missed !== 5) {
            const tries = document.querySelectorAll('.tries');
            tries[this.missed].firstElementChild.src = 'images/lostHeart.png';
            this.missed++;
        } else {
            this.gameOver(false);
        }

    };

    gameOver(gameWon) {
        const endGameMessage = document.querySelector('#game-over-message');
        // console.log(endGameMessage);
        const overlay = document.getElementById('overlay');
        // console.log(overlay);
        overlay.style.display = '';
        overlay.className = '';
        if (gameWon){
            endGameMessage.textContent = 'Congrats! You Won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            endGameMessage.textContent = 'GAME OVER. Try Again!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    };

}