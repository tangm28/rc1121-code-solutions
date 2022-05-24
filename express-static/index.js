const express = require('express');
const path = require('path');
const app = express();
const pubDir = path.join(__dirname, 'public');
console.log(pubDir);

const staticEx = express.static(pubDir);

app.use(staticEx);

app.listen(3000, () => {
});
