const fs = require('fs');
const path = 'dijkstra.txt';
fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
