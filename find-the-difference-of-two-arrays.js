info = {
  descriptionUrl:
    "https://leetcode.com/problems/find-the-difference-of-two-arrays/description/",
  createdAt: "2023-05-03",
  updatedAt: null,
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

function findDifference(nums1, nums2) {
  let nums1Set = new Set(nums1);
  nums1 = [...nums1Set];
  let nums2Set = new Set(nums2);
  nums2 = [...nums2Set];
  const answer1 = [];
  const answer2 = [];
  const answer = [];

  for (num of nums1) {
    if (!nums2.includes(num)) {
      answer1.push(num);
    }
  }

  for (num of nums2) {
    if (!nums1.includes(num)) {
      answer2.push(num);
    }
  }

  answer.push(answer1);
  answer.push(answer2);

  return answer;
}
