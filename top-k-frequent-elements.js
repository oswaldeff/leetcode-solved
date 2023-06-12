info = {
    descriptionUrl: "https://leetcode.com/problems/top-k-frequent-elements/description/",
    createdAt: "2023-05-22",
    updatedAt: null,
  };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 function topKFrequent(nums, k) {
    const cache = new Object();
    for (num of nums) {
        if (typeof cache[num] === 'undefined') {
            cache[num] = 0;
        } else {
            cache[num]++;
        }
    }
    const cacheArr =  Object.keys(
        Object.fromEntries(
            Object.entries(cache).sort((a, b) => b[1]-a[1] )
        )
    );
    return cacheArr.slice(0, k);
};
