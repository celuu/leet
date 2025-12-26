const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longWord = "";
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    if (current.length >= longWord.length) {
      longWord = current;
    }
  }

  return longWord;
};

module.exports = {
  longestWord,
};

console.log(longestWord("have a nice day"));// -> 'nice'
console.log(longestWord("The quick brown fox jumped over the lazy dog"));// -> 'jumped'