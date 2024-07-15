import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));



// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/goals2achieve", (req, res) => {
    res.render("goals2achieve.ejs");
});

app.get("/past-emotions", (req, res) => {
    res.render("past-emotions.ejs");
});










// function for submitting daily log
// every part has to be filled or error message pops out




