// require express

const express = require('express');

// requiring path it is inbuid

const path = require('path');


// chosing the port 

port=5000;

// to using the functionality of the express we need to call its function
const app=express();

// using ejs 
app.set('view engine', 'ejs');

// also giving it the path so tha we dont pave to puth path again and again

app.set('views', path.join(__dirname,"views" ));

// use signifies the middleware so we are using th parser fuction wha parser function do is req
//is obj and it create a object name body nside the req and the body contains name and phone basically convert it to readable format

app.use(express.urlencoded());


// lets give osme contact
var contactList=[
    {
        name:"hitesh",
        phone:"8058274014"
    },
    {
        name:"david",
        phone:"8058274914"
    },
    {
        name:"larry",
        phone:"9990118844"
    }

]
// send res
app.get('/', (req, res)=>{
// res.end("it is runnng");
return res.render('home', {
    title:'contacts list',
    contacts_list:contactList
});
})

// created the form to post new contacts now providing the routes an dthe controller to the post req
app.post('/create-contact', (req,res)=>{
    // console.log(req.body.name);
    
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // })
    contactList.push(req.body);
    return res.redirect('back');
})

// to make the app listen 

app.listen(port, (err)=>{
    if(err){
        console.log("Error in running the server")
    }
    console.log("my exxpress server is running on the port ", port)
})