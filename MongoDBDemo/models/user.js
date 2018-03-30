// require mongoose
const mongoose = require("mongoose");
// require Schema, so we are ready to create Schemas
let Schema = mongoose.Schema;

// passing en object in new Schema
let UserSchema = new Schema({
    firstName : String,
    lastName : { type: String, minlength: 2 },
    password : { type: String, required : true },
    created : {type: Date, default : Date.now},
    modified: Date
});

// virtual er dokument properties
// uden at hele tid trækker el sætter eldataene fra/til MongoDB
// virtual lad dig definere en 'fullInfo' property som ikke persisted til MongoDB
UserSchema.virtual("fullInfo").get(function(){ return this.firstName + "," + this.lastName});

// middleware(kalder pre og post hooks) er funktioner
// tildel kontrol gennem excution for async funktioner
// findes 2 typer pre hooks, serial og parallel
// serial middleware funktion er excuted en efter andre, når den kalder 'next()'
// parallel er mere finere flow kontrol
UserSchema.pre("save", function(){
    this.modified = new Date();
})

// this will saved the password before its saved to DB, with *****
UserSchema.pre("save", function(){
    this.password = `******* ${this.password} ********`;
})

// never user schema by self, but by model
let User = mongoose.model("User", UserSchema);

module.exports = User;