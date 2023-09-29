const first = "SILENT";
const second = "listen";

// there should be a sorted array
const anagram = (word1: string, word2: string) => {
  const firstWord = word1.toLowerCase().split("").sort().join();
  const secondWord = word1.toLowerCase().split("").sort().join();
  return word1 && word2 && firstWord === secondWord;
};

const convertWordToObject = (word: string): Record<string, number> =>
  word
    .toLowerCase()
    .split("")
    .reduce((acc: Record<string, number>, cv) => {
      acc[cv] = (acc[cv] || 0) + 1;

      return acc;
    }, {});

const anagram2 = (word1: string, word2: string) => {
  let matches = false;

  const hashWord1 = convertWordToObject(word1);

  const hashWord2 = convertWordToObject(word2);

  Object.keys(hashWord1).every((word) => {
    if (hashWord1[word] === hashWord2[word]) {
      matches = true;
    } else {
      matches = false;
    }
  });

  return matches;
};

console.log(anagram2(first, second));
