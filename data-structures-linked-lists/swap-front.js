/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const tempList = list;
  list = list.next;
  tempList.next = list.next;
  list.next = tempList;
  return list;
}
