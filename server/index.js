const app = require('./server.js');

const port = process.env.PORT || 1234;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log(`Server listening on ${host}:${port}`);
});
