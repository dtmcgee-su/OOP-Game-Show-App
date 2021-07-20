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
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
        this.missed = 0;
        //console.log(overlay);
    };

    checkForWin() {
        const lettersRemaining = document.querySelectorAll('.hide');
        if (lettersRemaining.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    removeLife() {
        const tries = document.querySelectorAll('.tries');
        tries[this.missed].firstElementChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
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
        this.missed = 0;
        if (this.checkForWin()) {
            endGameMessage.textContent = 'Congrats! You Won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            // this.newGame();

        } else {
            endGameMessage.textContent = 'GAME OVER. Try Again!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            // this.newGame();
        }

        document.querySelector('#phrase ul').innerHTML = '';
        const letterButtons = document.querySelectorAll('button');
        for (let i = 0; i < letterButtons.length; i++) {
            letterButtons[i].removeAttribute('disabled');
            letterButtons[i].classList.remove('wrong');
            letterButtons[i].classList.remove('chosen');
            letterButtons[i].disabled = false;
        }
        const heartIcons = document.querySelectorAll('ol img');
        for (let i = 0; i < heartIcons.length; i++) {
            heartIcons[i].src = 'images/liveHeart.png';
        }
    };

    handleInteraction(button) {
        button.disabled = true;
        // console.log(button);
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
}
