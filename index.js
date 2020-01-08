const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const messagesRouter = require('./routes/messages');
app.use('/messages', messagesRouter);


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/passwords', (req, res) => {
    res.send(['one','two','three','four','five']);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);


