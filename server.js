// * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

// ### Minimum Requirements
    // Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode 
        // these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. 
        // In addition, add this homework to your portfolio, more information can be found below.
    // ### Hosting on Heroku
        // Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, 
            // it will request credit card information if you have more than 5 applications at a time or are adding a database.

// //create readme
// add to portfolio

const express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

