const app = require('./app');

const port = 7000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
