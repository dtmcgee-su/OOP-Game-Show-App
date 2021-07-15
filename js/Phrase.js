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
}
