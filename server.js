const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTrackerdb", 
{ useNewUrlParser: true });

var MONGODB_URI = process.env.MONGODB_URI || "mongodb:/localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes")(app);
require("./routes/html")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});