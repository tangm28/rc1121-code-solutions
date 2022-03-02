/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const item = queue.peek();
    if (item === undefined) {
      return undefined;
    }
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}
