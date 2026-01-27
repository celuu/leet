const detectDictionary = (dictionary, alphabet) => {
   for(let i = 0; i < dictionary.length - 1; i++) {
     let current = dictionary[i];
     let next = dictionary[i + 1];
     if (checkWords(current, next, alphabet) === false) {
       return false
     }
   }
  return true
};

const checkWords = (word1, word2, alphabet) => {
  let length = Math.max(word1.length, word2.length)
  for(let i = 0; i < length; i++) {
    let value1 = alphabet.indexOf(word1[i])
    let value2 = alphabet.indexOf(word2[i])
    if(value1 < value2) {
      return true
    } else if (value1 > value2) {
      return false
    }
  }
  return true
}

module.exports = {
  detectDictionary,
};
