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
  let o = [];

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
  for(let i in label ){
    o.push(label[i])
    o.push(value[i])
    
    
  }
  return res.send(o)
});

app.listen(webport, () => {
  console.log('Running local host ' + 3000);
});
