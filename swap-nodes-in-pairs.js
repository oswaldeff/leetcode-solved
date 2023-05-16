info = {
  descriptionUrl:
    "https://leetcode.com/problems/swap-nodes-in-pairs/description/",
  createdAt: "2023-05-16",
  updatedAt: null,
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function swapPairs(head) {
  if (!head) {
    return head;
  }
  let answer = new ListNode(0);
  answer.next = head;
  let cache = answer;
  while (cache.next != null && cache.next.next != null) {
    let tempNode1 = cache.next;
    let tempNode2 = cache.next.next;
    cache.next = tempNode2;
    tempNode1.next = tempNode2.next;
    tempNode2.next = tempNode1;
    cache = cache.next.next;
  }
  return answer.next;
}
