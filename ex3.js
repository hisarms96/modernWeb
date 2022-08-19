console.log('START');
console.log('---------');


const fpath = 'c:/modernweb/workspace/modernweb/modernweb/test.js';
const fs = require('fs');

let dt = fs.readFileSync(fpath, 'utf-8');
console.log( dt );


// 파일 읽기 비동기 방식 호출


fs.readFile( fpath, 'utf-8', (err,data)=>{
    if(err) return console.log(err);
    console.log(data);
});


console.log('---------');
console.log('FIN.');
