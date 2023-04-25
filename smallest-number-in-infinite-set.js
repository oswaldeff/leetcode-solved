info = {
  descriptionUrl:
    "https://leetcode.com/problems/smallest-number-in-infinite-set/description/",
  createdAt: "2023-04-25",
  updatedAt: null,
};

class SmallestInfiniteSet {
  constructor() {
    this.attr = 1;
    this.set = new Set();
  }

  popSmallest() {
    if (this.set.size > 0) {
      let res = Math.min(...this.set);
      this.set.delete(res);
      return res;
    } else {
      this.attr += 1;
      return this.attr - 1;
    }
  }

  addBack(num) {
    if (this.attr > num) {
      this.set.add(num);
    }
  }
}
