const mongoose = require("mongoose");
const dbURL= "mongodb://demo:test@ds213759.mlab.com:13759/moondb";
mongoose.connect(dbURL);

// not connceted until here, cuz its async
mongoose.connection.on("connected", () => console.log("Connected"));
mongoose.connection.on("error", () => console.log("UPPPS"));