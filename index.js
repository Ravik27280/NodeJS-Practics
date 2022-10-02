
// const http= require('http');
// const data=require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();     
// }).listen(5000);


// to enter user aregument
// console.log(process.argv);



// add or remove file 
// const fs =require('fs');
// const input= process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('Invalid input')
// }


// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/data"+i+".txt","this is a test file "+i);
//     // fs.writeFileSync(`data${i}.txt`,"this is a test file");
    
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is", item)
//     })
// }
// )


// console.log("Start exe...")
// setTimeout(()=>{
//     console.log("Logic exe...")

// },1000)
// // console.log("Logic exe...")

// console.log("compile exe...")


// promises.
// let a=20;
// let b=0;
// let waitingData=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000)

// })
// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b)
// })



// EXPRESS JS
const express=require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('Hello, This is Home Page');
});
app.get('/help',(req,res)=>{
    res.send("Hello this is help page");
})

app.listen(5000);



