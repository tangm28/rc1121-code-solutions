/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let prevNode = list;
  let node = list.next;
  while (node !== null) {
    prevNode = node;
    node = node.next;
  }
  prevNode.next = new LinkedList(value);
  list = prevNode;
}
