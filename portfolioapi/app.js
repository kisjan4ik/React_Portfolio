const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrig = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get("/api", (req, res, next) => {
    res.send("API Status: Running")
});


app.post("/api/email", (req, res, next) => {
    sendGrig.setApiKey("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");
    const msg = {
        to: "aliona_kuzmenko@yahoo.com",
        from: req.body.emai,
        subject: "Portfolio contact",
        text: req.body.message
    }

    sendGrig.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            })

        })
        .catch(err => {
            console.log("error: ", err);
            res.status(401).json({
                success:false
            })
        })
})

app.listen(3030, "0.0.0.0");