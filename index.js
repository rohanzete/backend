//express

//code
const express = require('express');
const app = express();//app is object
const port = 8080;

//app.listen is used to start the server.
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// //routing
// //ek path ke liye ek hi response bhej sakte hai.
// app.get('/',(req,res)=>{
//     res.send("This is the response");// it sends response from server
// }); 

// app.get('/about',(req,res)=>{   
//     res.send("This is the about page");
// });

// app.get("*",(req,res)=>{   //for all other routes except above routes use * 
//     res.send("not found");
// });











//path parameters ?????

app.get('/',(req,res)=>{
    res.send("This is the response");// it sends response from server
}); 

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);//it will show request parameters.
    res.send("hello");
});










// //query string 
// app.get("/search" ,(req,res)=>{
//     console.log(req.query);//it will show query parameters.
//     res.send("search page");
// });