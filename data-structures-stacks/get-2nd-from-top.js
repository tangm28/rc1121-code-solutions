/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const placeholder = [];
  let item;
  for (let i = 0; i < 2; i++) {
    item = stack.pop();
    if (item === undefined && i === 0) {
      return undefined;
    }
    if (item === undefined) {
      stack.push(placeholder[0]);
      return item;
    }
    placeholder.push(item);
  }
  stack.push(placeholder[1]);
  stack.push(placeholder[0]);
  return placeholder[1];
}
