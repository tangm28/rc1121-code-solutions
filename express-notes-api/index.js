const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const path = './data.json';

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const newData = [];
  for (const note in data.notes) {
    newData.push(data.notes[note]);
  }
  res.json(newData);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number(id) < 0 || isNaN(Number(id))) {
    res.sendStatus(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    const errMess = {
      error: `cannot find note with ${id}`
    };
    res.sendStatus(404).json(errMess);
  } else {
    res.json(data.notes[id]);
  }
});

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.sendStatus(400).json({ error: 'content is a required field' });
  } else {
    const newData = {
      id: data.nextId,
      content: req.body.content
    };
    data.notes[data.nextId] = newData;
    data.nextId++;
    fs.writeFile(path, JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    res.json(newData);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number(id) < 0 || isNaN(Number(id))) {
    res.sendStatus(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    const errMess = {
      error: `cannot find note with ${id}`
    };
    res.sendStatus(404).json(errMess);
  } else {
    delete data.notes[id];
    fs.writeFile(path, JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    res.sendStatus(204);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number(id) < 0 || isNaN(Number(id))) {
    res.sendStatus(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    const errMess = {
      error: `cannot find note with ${id}`
    };
    res.sendStatus(404).json(errMess);
  } else if (!req.body.content) {
    res.sendStatus(400).json({ error: 'content is a required field' });
  } else {
    const newData = {
      id: id,
      content: req.body.content
    };
    data.notes[id] = newData;
    fs.writeFile(path, JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    res.sendStatus(200).json(newData);
  }
});

app.listen(3000);

// if (action === 'read') {
//   for (const keys in data.notes) {
//     console.log(keys + ': ' + data.notes[keys]);
//   }
// } else if (action === 'add') {
//   data.notes[data.nextId] = input;
//   data.nextId++;
//   fs.writeFile(file, JSON.stringify(data, null, 2), err => {
//     if (err) throw err;
//   });
// } else if (action === 'delete') {
//   delete data.notes[input];
//   fs.writeFile(file, JSON.stringify(data, null, 2), err => {
//     if (err) throw err;
//   });
// } else if (action === 'update') {
//   data.notes[input] = update;
//   fs.writeFile(file, JSON.stringify(data, null, 2), err => {
//     if (err) throw err;
//   });
// }
