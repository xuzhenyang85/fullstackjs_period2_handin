require("./dbSetup.js");
const expect = require("chai").expect;
var facade = require("../facades/facade.js");
var assert = require("assert");

describe("Test the addUser method",function(){
    it("addUser will return Jens Olesen",function(){
        testUser = facade.addUser("Jens","Olesen","jr","password");
        expect(testUser['firstName']).to.equal("Jens");
        expect(testUser['lastName']).to.equal("Olesen");
        expect(testUser['userName']).to.equal("jr");
        //expect(testUser['password']).to.equal("123");
        console.log(testUser['password']);
    })
})