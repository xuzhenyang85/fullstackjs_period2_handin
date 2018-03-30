require("./db");
const mongoose = require("mongoose");
const User = require("./models/user");
/*
let user1 = new User({
    firstName : "Kurt",
    lastName : "Wonnegut",
    password: "secret"
});*/

/*user1.save((err,data)=>{
    if(err){console.log(err.message)}
    else {
        console.log(data.fullInfo + "," + data.password);
    }
})*/

// anbefal

// save() returnerer en promise
/*user1.save()
.then( data => console.log(data))
.catch(err => console.log(err))
*/

User.findOne({firstName: "Kurt"})
.then(function(data){
    console.log(data.firstName);
})
.catch(function(err){
    console.log(err);
});
