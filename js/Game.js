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
        let randomPhrase = this.getRandomPhrase();
        const addPhrase = new Phrase(randomPhrase.phrase);
        addPhrase.addPhraseToDisplay();
        this.activePhrase = addPhrase;
        this.missed = 0;
        //console.log(overlay);
    };

    // handleInteraction() {


    checkForWin(){
        const lettersRemaining = document.querySelectorAll('.hide');
        if (lettersRemaining.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    removeLife() {

        if (this.missed < 5) {
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
        if (this.checkForWin()){
            endGameMessage.textContent = 'Congrats! You Won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
          //  this.newGame();

        } else {
            endGameMessage.textContent = 'GAME OVER. Try Again!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
           // this.newGame();
        }
    };

    handleInteraction(button) {
        if (button.disable !== true) {
            button.disable = true;
            // console.log(button);
            if (this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
                if (this.checkForWin() === true) {
                    this.gameOver(true);
                }
            } else {
                button.classList.add('wrong');
                this.removeLife();
            }
        }
    }

    newGame() {
        const clearList = document.querySelector('ul');
        // const list = clearList.children;
        // console.log(list);
        clearList.innerHTML = '';
        const tries = document.querySelectorAll('.tries');
        tries.forEach(heart => heart.firstElementChild.src = 'images/liveHeart.png');

        const characters = Array.from(document.getElementsByClassName('key'));
        characters.forEach((letter) => {
            letter.classList.remove('show');
            letter.classList.remove('wrong');
            letter.classList.remove('chosen');
            letter.classList.add('hide');
            letter.disable = false;
        });
        // this.missed = 0;
        this.startGame();
    }

    
}