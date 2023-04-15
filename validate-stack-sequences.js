info = {
  descriptionUrl:
    "https://leetcode.com/problems/validate-stack-sequences/description/",
  createdAt: "2023-04-14",
  updatedAt: null,
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function validateStackSequences(pushed, popped) {
  const pushedNow = [];
  let result = true;
  let initHead = false;

  while (pushed.length > 0 || popped.length > 0) {
    let pushedHead = pushed.shift();
    let poppedHead = popped.shift();
    if (!initHead && pushedHead === poppedHead) {
      initHead = true;
    } else if (!initHead && pushedHead !== poppedHead) {
      pushedNow.push(pushedHead);
      popped.unshift(poppedHead);
    } else if (initHead && pushedHead !== poppedHead) {
      if (pushedNow.length > 0) {
        pushedNowHead = pushedNow.pop();
        if (pushedNowHead !== poppedHead) {
          console.log("Nowhead: ", pushedNowHead);
          pushedNow.push(pushedNowHead);
        }
        console.log("pushedNow With Length: ", pushedNow);
      } else {
        if (pushedHead !== undefined) {
          console.log("head: ", pushedHead);
          pushedNow.push(pushedHead);
        }
      }
    } else {
      // initHead && pushedHead===poppedHead
    }
    console.log("pushedNow: ", pushedNow);
  }
  console.log("============");
  console.log(pushed);
  console.log(popped);
  console.log("pushedNow", pushedNow);
  console.log("length", pushedNow.length);

  if (pushedNow.length !== 0) {
    console.log("result is false");
    result = false;
  }
  return result;
}
