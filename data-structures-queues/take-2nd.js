/* exported take2nd */

function take2nd(queue) {
  const item = queue.peek();
  if (item === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}
