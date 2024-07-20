import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import pg from "pg";
import { hostname } from "os";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
    user: "Louis",
    hostname: "localhost",
    password: "reminest",
    port: 5432,
    database: "reminest"
});
db.connect();



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



app.post("/submit", async (req, res) => {
    keyMoments  = req.body['key-moments'];
    newGoals = req.body['new-goals'];

    console.log(`Key Moments: ${keyMoments}, New Goals: ${newGoals}`);

    await db.query(
        "INSERT INTO daily_log (date, emotion, event) VALUES ($1, $2, $3)",
        [new Date().toISOString().split('T')[0], "happy-test", keyMoments]
    );

      

     res.render("goals2achieve.ejs", { submittedData: {newGoals}});

});












// function for submitting daily log
// every part has to be filled or error message pops out




