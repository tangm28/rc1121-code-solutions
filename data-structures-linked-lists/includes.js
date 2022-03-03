/* exported includes */

function includes(list, value) {
  let node = list;
  if (node.next === null) {
    return node.data === value;
  }
  while (node !== null) {
    if (node.data === value) {
      return true;
    }
    node = node.next;
  }
  return false;
}
