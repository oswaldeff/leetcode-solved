info = {
  descriptionUrl:
    'https://leetcode.com/problems/merge-strings-alternately/description/',
  createdAt: '2023-04-18',
  updatedAt: null,
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  const merged = [];
  const word1Arr = [...word1];
  let word1Status = true;
  const word2Arr = [...word2];
  let word2Status = true;

  while (word1Status || word2Status) {
    if (discriminateWord(word1Arr)) {
      word1Head = word1Arr.shift();
      merged.push(word1Head);
    } else {
      word1Status = false;
    }
    if (discriminateWord(word2Arr)) {
      word2Head = word2Arr.shift();
      merged.push(word2Head);
    } else {
      word2Status = false;
    }
  }
  return merged.join('');
}

let discriminateWord = arr => {
  return arr.length > 0;
};
