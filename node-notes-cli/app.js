const file = './data.json';
const data = require(file);
const fs = require('fs');
const action = process.argv[2];
const input = process.argv[3];
const update = process.argv[4];

if (action === 'read') {
  for (const keys in data.notes) {
    console.log(keys + ': ' + data.notes[keys]);
  }
} else if (action === 'add') {
  data.notes[data.nextId] = input;
  data.nextId++;
  fs.writeFile(file, JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
} else if (action === 'delete') {
  delete data.notes[input];
  fs.writeFile(file, JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
} else if (action === 'update') {
  data.notes[input] = update;
  fs.writeFile(file, JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
