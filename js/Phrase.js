/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
         const phraseDiv = document.getElementById('phrase');
         const phraseUsed = this.phrase;
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
   
        const ul = document.querySelector('ul');
        console.log(ul);
        const letters = ul.children;
        for(let i = 0; i < letters.length; i++){
            if(letter === letters[i].textContent){
                letters[i].classList.remove('hide');
                letters[i].classList.add('show');
            }
        }
     };
};
