const fs = require('fs');
const data = Math.random();

fs.writeFile('random.txt', data.toString(), err => {
  if (err) { console.log(err); }
});
