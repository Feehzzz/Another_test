const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/', (req, res) => {
  let data = req.body;
  let year = Object.keys(data)
  let values = Object.values(data)
  console.log(year,values)
 
});

app.listen(3000, () => {
  console.log('Running local host ' + 3000);
});
