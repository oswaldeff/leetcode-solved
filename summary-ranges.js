info = {
  descriptionUrl: "https://leetcode.com/problems/summary-ranges/description/",
  createdAt: "2023-06-12",
  updatedAt: "2023-06-12",
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  let a = nums[0];
  let b = nums[0];
  const result = [];

  if (nums.length === 0) {
    return result;
  }

  for (let num of nums.slice(1, nums.length)) {
    if (num === b + 1) {
      b = num;
    } else {
      result.push(makeArrowExpression(a, b));
      a = num;
      b = num;
    }
  }

  result.push(makeArrowExpression(a, b));

  return result;
};

const makeArrowExpression = (a, b) => {
  if (a !== b) {
    return `${a}->${b}`;
  } else {
    return `${a}`;
  }
};
