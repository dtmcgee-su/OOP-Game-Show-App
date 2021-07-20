class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [
            new Phrase('Under Your Nose'),
            new Phrase('Roll With the Punches'),
            new Phrase('Hit Below The Belt'),
            new Phrase('Close But No Cigar'),
            new Phrase('Happy as a Clam'),
            new Phrase('Down To The Wire'),
            new Phrase('Throw me a bone'),
            new Phrase('Quality Time'),
            new Phrase('Give a man a fish'),
            new Phrase('Jack of all trades'),
            new Phrase('Put a sock in it'),
            new Phrase('Down to earth'),
            new Phrase('A little bird told me'),
            new Phrase('An arm and a leg'),
            new Phrase('Par for the course'),
            new Phrase('Foaming at the mouth')
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
    };

    // If all the letters in phrase have been selected, return true  
    checkForWin() {
        const lettersRemaining = document.querySelectorAll('.hide');
        if (lettersRemaining.length === 0) {
            return true;
        } else {
            return false;
        }
    };
    // If user guesses a letter not in the phrase, remove a life
    removeLife() {
        const tries = document.querySelectorAll('.tries');
        tries[this.missed].firstElementChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };
    // Display win or loss message based on result of game, start a new game and reset everything
    gameOver(gameWon) {
        const endGameMessage = document.querySelector('#game-over-message');
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';
        overlay.className = '';
        this.missed = 0;
        if (this.checkForWin()) {
            endGameMessage.textContent = 'Congrats! You Won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            endGameMessage.textContent = 'GAME OVER. Try Again!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
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
    // handles all interactions user uses when playing the game
    handleInteraction(button) {
        button.disabled = true;
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
