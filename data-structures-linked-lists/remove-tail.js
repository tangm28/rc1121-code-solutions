/* exported removeTail */

function removeTail(list) {
  let prevTail;
  let tail = list;
  let node = list.next;
  if (node === null) {
    prevTail = tail;
  }
  while (node !== null) {
    prevTail = tail;
    tail = node;
    node = node.next;
  }
  prevTail.next = null;
  list = prevTail;
}
