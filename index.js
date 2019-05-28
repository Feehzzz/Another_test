const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/', (req, res) => {
  let data = req.body
  let label = [];
  let values = []
  for(const key of Object.keys(data)){
    label = data[key];
    values = key;
  }
  
  console.log(values,label )
  
 
});

app.listen(3000, () => {
  console.log('Running local host ' + 3000);
});
