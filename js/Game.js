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
        console.log(overlay);
    };

    // handleInteraction() {

    checkLetter(letter) {
        let currentPhrase = game.activePhrase.phrase;
        if (currentPhrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

     showMatchedLetter(letter){
        let currentPhrase = game.activePhrase.phrase;
        for (let i = 0; i < currentPhrase.length; i++) {
            if (currentPhrase[i] === letter) {
                const selectedLetter = document.querySelector(`${letter}`);
            }
        }
     };

    // checkForWin(){

    // };

    // removeLife(){

    // };

    // gameOver(gameWon){

    // };
    // };
};