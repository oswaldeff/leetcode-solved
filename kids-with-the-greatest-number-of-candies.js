info = {
  descriptionUrl:
    'https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/',
  createdAt: '2023-04-17',
  updatedAt: null,
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const result = [];
  let maxCandy = Math.max(...candies);
  for (candy of candies) {
    let sumCandyWithExtra = candy + extraCandies;
    if (sumCandyWithExtra >= maxCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
