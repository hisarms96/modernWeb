let express = require('express');
let app = express();

app.get('/', (req,res)=>{
    res.send('Hello, Express');
});


app.get('/hi', (req,res)=>{
    res.send('Hi~ Express');
});

const fs = require('fs');

app.get("/save", (req, res) => {
    var data = req.param('data');
    fs.writeFileSync("C:/Temp/data.txt", data)
    res.send(data);
  });




app.get("/get", (req, res) => {
    var data = fs.readFileSync("c:/Temp/index.html", 'utf8');
    res.send(data);
  });

  

// 하위 폴더 public 을 있는 그대로 액세스하게 만들기
console.log( __dirname );

// app.get 아니다!! .use 다!!
app.use( '/public', express.static(__dirname + '/public' ));



// POST 방식 데이터 들어온 것 처리
let bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended:false}));
app.use( bodyParser.json());
app.use( bodyParser.text());


// 아래 post 방식을 테스트하려면
// curl http://localhost:8888/save -X POST -d "data=hello" -H "Content-Type:application/x-www-form-urlencoded"
app.post( '/save', (req,res)=>{
    var data = req.body.data;
    res.send(data);
});

// curl http://localhost:8888/calc -X POST -d "1+5*3/3" -H "Content-Type:text/plain"
app.post( '/calc4', (req,res)=>{
    var data = req.body;
    var result = eval(data);
    res.send( String(result) );
});




app.listen(8888);

console.log('Running in the 2020');