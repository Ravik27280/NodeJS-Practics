
// const http= require('http');
// const data=require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();     
// }).listen(5000);


// to enter user aregument
// console.log(process.argv);

const fs =require('fs');
const input= process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log('Invalid input')
}
