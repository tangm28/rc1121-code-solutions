/* exported getTail */

function getTail(list) {
  let prevNode = list;
  let node = list.next;
  while (node !== null) {
    prevNode = node;
    node = node.next;
  }
  return prevNode.data;
}
