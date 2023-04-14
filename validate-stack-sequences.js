info = {
  descriptionUrl:
    'https://leetcode.com/problems/validate-stack-sequences/description/',
  createdAt: '2023-04-14',
  updatedAt: null,
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function validateStackSequences(pushed, popped) {
  const pushedResult = [];
  const poppedResult = [];

  let initHead = false;
  while (pushed) {
    let pushedHead = pushed.shift(); // shife는 지양
    let poppedHead = popped.shift();
    if (!initHead && pushedHead === poppedHead) {
      initHead = true;
    } else if (!initHead && pushedHead !== poppedHead) {
      pushedResult.push(pushedHead);
      popped.unshift(poppedHead);
    } else {
      while (popped) {
        // FIXME
      }
    }
  }
  return true;
}
