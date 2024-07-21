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
var emotion;
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

app.get("/past-emotions", async (req, res) => {
     
    try {
        const result = await db.query("SELECT date, emotion FROM daily_log");
        const data  = result.rows
        res.render("past-emotions.ejs", {data: data });
    } catch(err) {
        res.redirect("/");
    }
     
});

app.get("/selected-date", (req, res) => {
    const selectedDate = req.query.date;
    res.render("log-info.ejs", { date: selectedDate});
});


app.post("/submit", async (req, res) => {
    keyMoments  = req.body['key-moments'];
    newGoals = req.body['new-goals'];
    emotion = req.body['selected-emotion'];

    console.log(`Key Moments: ${keyMoments}, New Goals: ${newGoals}, Emoji: ${emotion}`);

    try{
        await db.query(
            "INSERT INTO daily_log (date, emotion, event) VALUES ($1, $2, $3)",
            [new Date().toISOString().split('T')[0], emotion, keyMoments]
        );
        res.render("goals2achieve.ejs", { submittedData: {newGoals}});
    } catch(err) {
        console.log(err);
        res.redirect("/");
    }
      

     

});












// function for submitting daily log
// every part has to be filled or error message pops out




