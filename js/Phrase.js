class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    // add random pnhrase to display, only show blank for each letter (no spaces)
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

    };
    // if the letter guesssed is in the phrase, return true
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };
    // reveal the places of the letter/ letters correctly guessed 
     showMatchedLetter(letter){
        const ul = document.querySelector('ul');
        const letters = ul.children;
        for(let i = 0; i < letters.length; i++){
            if(letter === letters[i].textContent){
                letters[i].classList.remove('hide');
                letters[i].classList.add('show');
            }
        }
     };
};
