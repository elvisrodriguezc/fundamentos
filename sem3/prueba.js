function findWord(phrase, word) {

    let position = phrase.indexOf(word);
    let ifound = (position === 0 && phrase.charAt(position + word.length) === " " || (phrase.charAt(position - 1) === " " && phrase.charAt(position + word.length) === " ") || (phrase.charAt(position - 1) === " " && phrase.charAt(position + word.length) === "."));
    return ifound
}

const phrase = "Hola me llamo Jhon.";
const word = "Jhon";
console.log(findWord(phrase, word))