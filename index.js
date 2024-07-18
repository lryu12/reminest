import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

var keyMoments;
var newGoals;
// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/goals2achieve", (req, res) => {
    res.render("goals2achieve.ejs", { submittedData: { keyMoments, newGoals}});
});

app.get("/past-emotions", (req, res) => {
    res.render("past-emotions.ejs");
});

app.post("/submit", (req, res) => {
    keyMoments  = req.body['key-moments'];
    newGoals = req.body['new-goals'];
    console.log(`Key Moments: ${keyMoments}, New Goals: ${newGoals}`);
    res.render("goals2achieve.ejs", { submittedData: {newGoals}});
});












// function for submitting daily log
// every part has to be filled or error message pops out




