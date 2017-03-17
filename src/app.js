import express from 'express';
import routify from './routes/routify';

var app = express();
app = routify(app);

app.listen(3000, function () {});
