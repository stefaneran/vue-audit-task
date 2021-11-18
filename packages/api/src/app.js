const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routers/userRouter');
const notesRouter = require('./routers/notesRouter');

app.use(express.json());

app.use(cors());

//  Body Parser  => reading data from body into req.body protect from scraping etc
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);

module.exports = app;
