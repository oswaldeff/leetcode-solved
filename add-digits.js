info = {
  descriptionUrl: "https://leetcode.com/problems/add-digits/description/",
  createdAt: "2023-04-26",
  updatedAt: null,
};

/**
 * @param {number} num
 * @return {number}
 */

function addDigits(num) {
  let numStr = num.toString();
  let numArrTypeStr = numStr.split("");

  while (numArrTypeStr.length > 1) {
    const numArrTypeNum = numArrTypeStr.map((n) => {
      return Number(n);
    });
    const sumArrNum = (numArrTypeNum) => {
      return numArrTypeNum.reduce((a, b) => a + b, 0);
    };

    numStr = sumArrNum(numArrTypeNum).toString();
    numArrTypeStr = numStr.split("");
  }
  return Number(numStr);
}
