const dbSetup = require("../dbSetup");
const expect = require("chai").expect;
var userFacade = require("../facades/facade");
var assert = require("assert");
var TEST_DB_URI = "mongodb://test:123456@ds261118.mlab.com:61118/miniproject";
//var TEST_DB_URI = "ADD YOUR OWN URI TO YOUR TEST DATABASE";


/* Connect to the TEST-DATABASE */
before(async function(){
    dbSetup.setDbUri(TEST_DB_URI);
    await dbSetup.connect();   
 })
 
 /* Setup the database in a known state (2 users) before EACH test */
 beforeEach(async function(){
   console.log("BeforeEach")
   await User.remove({});
   await Promise.all([
     new User({firstName:"Kurt",lastName:"Wonnegut",userName:"kw",password:"test"}).save(),
     new User({firstName:"Hanne",lastName:"Wonnegut",userName:"hw",password:"test"}).save(),
   ])
 })
 
 describe("Testing the User Facade", function(){
     it("Should return 2 users", async function(){
      var users = await userFacade.getAllUsers();
        console.log(users);
      //expect(users.length).to.be.equal(2);
    });
 /*
    it("Should Find Kurt Wonnegut", async function(){
      var user = await userFacade.findByUsername("kw");
      expect(user.firstName).to.be.equal("Kurt");
    });
 
   it("Should add Peter Pan", async function(){
      var user = await userFacade.addUser("Peter","Pan","peter","test");
      expect(user.firstName).to.be.equal("Peter");
     
      var users = await userFacade.getAllUsers();
      expect(users.length).to.be.equal(3);
    });*/
 })