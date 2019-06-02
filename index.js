const express   = require('express');
const app       = express();
const dotenv    = require('dotenv');
const mongoose  = require('mongoose');
const router    = require('./routes/routes');

//Load Configurations
dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log("connected to db!")
);

//Middleware
app.use(express.json());

//Passing to Route
router(app);

app.listen(process.env.PORT, () => {
  console.log('Server Up and Running');
});