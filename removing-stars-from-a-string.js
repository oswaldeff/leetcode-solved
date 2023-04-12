info = {
  descriptionUrl:
    "https://leetcode.com/problems/removing-stars-from-a-string/description/",
  createdAt: "2023-04-12",
  updatedAt: null,
};

/**
 * @param {string} s (1 <= s.length <= 10^5)
 * @return {string}
 */

function removeStars(s) {
  var arr = [];
  for (let i of s) {
    if (i === "*" && arr !== []) {
      arr.pop();
    } else {
      arr.push(i);
    }
  }
  return arr.join("");
}
