var mongoose = require('mongoose');
var User = require('../models/user.js');

function addUser(firstName,lastName,userName,password){
    var hashPassword = "hashing" + password;
    var userDetail = {firstName,lastName,userName,hashPassword};
    var user = new User(userDetail);
    user.save();
    return user;
};

function addJobToUser(id,type,company,companyUrl){
    var jobDetail = {type,company,companyUrl};
    var job = new User(userDetail);
    return user;
};

module.exports = {
    addUser: addUser
};