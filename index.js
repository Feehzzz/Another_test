const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const webport = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/', (req, res) => {
  let data = req.body
  let label = [];
  let value = [];

  for (const y in data){  

    for(const m in data[y]){

      for(const d in data[y][m]){
        label.push(y+'-'+m+'-'+d);

        for(const v in data[y][m][d]){
          value.push(data[y][m][d][v]);
          
          
        }
      }
    }
  }
  res.send(`Data: ${label} Valores: ${value}`)
  
});

app.listen(webport, () => {
  console.log('Running local host ' + 3000);
});
