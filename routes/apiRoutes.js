const Workout = require("../models /workout");

module.exports = function(app) {
app.get("/api/workouts", function({ body }, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
   })
}