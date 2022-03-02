/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let item = queue.dequeue();
  let smallest = item;
  while (item !== undefined) {
    item = queue.peek();
    if (item === undefined) {
      return smallest;
    }
    if (smallest <= item) {
      return smallest;
    } else {
      queue.enqueue(smallest);
      smallest = queue.dequeue();
    }
  }
  return item;
}
