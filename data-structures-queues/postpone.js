/* exported postpone */

function postpone(queue) {
  const item = queue.peek();
  if (item === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
}
