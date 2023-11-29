// eslint-disable-next-line import/no-extraneous-dependencies
// /* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const db = process.env.DATABASE;

mongoose
  .connect(db, {})
  .then((con) => {
    console.log(con.connections);
    console.log('MongoDB connected...');
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is listening the ${port}`);
});
