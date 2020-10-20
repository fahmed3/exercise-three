const express = require("express");

const app = express();
const port = 4000; //port 3000 is for react app

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

// Serving Static Files
app.use("/static", express.static("public"));

// Routing in Express
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Exercise Three is running!"));
