const express = require('express');

const routes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.use(routes.universityRoute);

app.listen(port, () => console.log(`API running on port ${port}`));
