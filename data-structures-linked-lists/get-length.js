/* exported getLength */

function getLength(list) {
  let counter = 1;
  let node = list.next;
  while (node !== null) {
    counter++;
    node = node.next;
  }
  return counter;
}
