// creates a database connection
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// middleware and JSON parsing
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades/', (req, res, next) => {
  // sql query
  const sql = `
    select *
      from "grades"
  `;
  // find sql query - result is sql data - then is used so code block runs
  // after sql query is finished - catch is used in case the sql query
  // doesn't work for x reasons
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  } else if (!req.body.course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  } else if (!req.body.score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  } else if (isNaN(Number(req.body.score)) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    res.status(400).json({ error: 'score needs to be a positive integer between 0-100' });
    return;
  }

  const newGrade = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  // sql query - $# takes in parameters
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!req.body.name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  } else if (!req.body.course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  } else if (!req.body.score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  } else if (isNaN(Number(req.body.score)) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    res.status(400).json({ error: 'score needs to be a positive integer between 0-100' });
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }

  const newGrade = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };

  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *
  `;

  const params = [newGrade.name, newGrade.course, newGrade.score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }

  const sql = `
    select *
      from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        return;
      }
      const newSql = `
        delete from "grades"
        where "gradeId" = $1
      `;
      db.query(newSql, params)
        .then(result => {
          res.status(204).json({ success: `"gradeId" ${gradeId} has been deleted` });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({
            error: 'An unexpected error occurred.'
          });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000);
