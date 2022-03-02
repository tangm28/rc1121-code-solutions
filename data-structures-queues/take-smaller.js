/* exported takeSmaller */

function takeSmaller(queue) {
  const item = queue.peek();
  if (item === undefined) {
    return;
  }
  const firstItem = queue.dequeue();
  const secondItem = queue.dequeue();
  if (secondItem === undefined) {
    return firstItem;
  }
  if (firstItem < secondItem) {
    queue.enqueue(secondItem);
    return firstItem;
  } else {
    queue.enqueue(firstItem);
    return secondItem;
  }
}
