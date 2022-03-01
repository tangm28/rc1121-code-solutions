/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const placeholder = [];
  let item;
  for (let i = 0; i < 2; i++) {
    item = stack.pop();
    if (item === undefined && i === 0) {
      return;
    }
    if (item === undefined) {
      stack.push(value);
      stack.push(placeholder[0]);
      return;
    }
    placeholder.push(item);
  }
  stack.push(placeholder[1]);
  stack.push(value);
  stack.push(placeholder[0]);
}
