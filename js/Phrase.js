/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
         const phraseDiv = document.getElementById('phrase');
         const phraseUsed = game.getRandomPhrase().phrase;
         for (let i = 0; i < phraseUsed.length; i++) {
            const character =  phraseUsed[i];
            const phraseUl = document.querySelector('#phrase ul');
            const characterLi = document.createElement('li');
            phraseUl.appendChild(characterLi);
            characterLi.textContent = `${character}`;
            if (character === ' ') {
                characterLi.className = 'space';
            } else {
                characterLi.className = `hide letter ${character}`;
           }

        };
 
        console.log(phraseUsed);
        console.log(phraseDiv);
    };

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

     showMatchedLetter(letter){
        const characters = Array.from(document.getElementsByClassName(letter));
        //console.log(characters);
        characters.forEach(correctGuess => {
            correctGuess.classList.remove('hide');
            correctGuess.classList.add('show');
        });
        };
};
