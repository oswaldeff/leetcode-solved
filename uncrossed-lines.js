info = {
  descriptionUrl: "https://leetcode.com/problems/uncrossed-lines/description/",
  createdAt: "2023-05-11",
  updatedAt: null,
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function maxUncrossedLines(nums1, nums2) {
  // (x1, y1), (x2, y2) // ex:

  // (1) x1 < x2 -> y1 < y2
  // (2) x1 = x2 -> y1 <= y2
  // (3) x1 > x2 -> y1 >= y2

  // [num, x, y]
  const newNums1 = newNums(nums1, "x");
  const newNums2 = newNums(nums2, "y");
  console.log(newNums1);
  console.log(newNums2);

  // [ {num: [x, y]} ]
  // numList = []
  // numObj = {}
  const numList = [];
  for (xNum of newNums1) {
    for (yNum of newNums2) {
      const numObj = new Object();
      if (xNum[0] === yNum[0]) {
        numObj.num = Number(xNum[0]);
        numObj.comb = [xNum[1], yNum[2]];
        numList.push(numObj);
      }
    }
  }
  console.log(numList);
}

const newNums = (nums, coordinate) => {
  let arr = [];
  if (coordinate === "x") {
    for (idx in nums) {
      arr.push([nums[idx], Number(idx), 0]);
    }
  } else {
    for (idx in nums) {
      arr.push([nums[idx], 0, Number(idx)]);
    }
  }
  return arr;
};
