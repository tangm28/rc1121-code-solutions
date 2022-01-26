const express = require('express');
const app = express();
let nextID = 1;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const data = [];
  for (const key in grades) {
    data.push(grades[key]);
  }
  res.json(data);
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  const newObj = {
    id: nextID,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.send(newObj);
  nextID++;
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
