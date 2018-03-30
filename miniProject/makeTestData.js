require("./dbSetup.js");

// problem er det tager tid til at oprette user
// har brug for at sync funktion med start og await
// find async måde
var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

// short cut annation
function userCreate (firstName, lastName, userName, password, type, company, companyUrl){
    var job = [{type, company, companyUrl},{type, company, companyUrl}];
    var user = {firstName, lastName,userName, password, job:job};
    // use User module, has the same methods as Schema, cuz we compiled Schema to a module
    var u = new User(user);
    return u.save();
}

function postionCreator(lon,lat,userId){
    var posDetail = { user: userId, loc: { coordinates: [lon,lat]}};
    var postion = new Position(posDetail);
    return postion.save();
}

function LocationBlogCreator(info, author, longitude, latitude){
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
}

// await has need to have a function as async
async function createUsers(){
    // remove all data in tables
    await User.remove({});
    await Position.remove({});
    await LocationBlog.remove({});
    // now the user has the promise
    // return an array of promises
    var userPromises =[
        userCreate("Kurt","Wonnegut","annb","test","wow","comp","comp.url"),
        userCreate("a","b","xcl","test","wow","comp","comp.url"),
        userCreate("a","b","weow","test","wow","comp","comp.url"),
        userCreate("a","b","sdf0","test","wow","comp","comp.url"),
        userCreate("a","b","wpjf","test","wow","comp","comp.url")
    ]
    var users = await Promise.all(userPromises);

    var positionPromises =[
        postionCreator(123,123,users[0]._id),
        postionCreator(123,123,users[1]._id),
        postionCreator(123,123,users[2]._id),
        postionCreator(123,123,users[3]._id),
        postionCreator(123,123,users[4]._id)
    ]
    //var user1 = await userCreate("a","b","annb","test","wow","comp","comp.url");
    // This is will take time, cuz now promise wil run in seriel insteted paralle
    // var user2 = await userCreate("a","b","annsb","test","wow","comp","comp.url");
    // create an array and put all users in the array
    // so Promise.all create a list of array in rigtig order and run it
   
    var positions = await Promise.all(positionPromises);

    var blogPromises = [
        LocationBlogCreator("Cool Place", users[0]._id,23,435),
        LocationBlogCreator("Decent Place", users[1]._id,324,452),
        LocationBlogCreator("Alright Place", users[2]._id,23423,43235),
        LocationBlogCreator("Pretty Place", users[3]._id,23123,4234635),
    ];
    var blogs = await Promise.all(blogPromises);
    console.log(users);
    console.log(positions);
    console.log(blogPromises);
}

createUsers();

/*
userCreate("a","b","annb","test","wow","comp","comp.url")
.then(user => {
    console.log("********************");
    postionCreator(156,26,data._id)
    .then(p => console.log(p));
});*/