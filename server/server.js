const express = require("express");
const app = express();
const PORT = process.env.port || 8400;
const mysql = require("mysql");
const bodyParser = require("body-parser");
const {urlencoded} = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"7859",
    database:"bbs"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})

//데이터입력
app.post("/insert", (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const ingred = req.body.ingred;
    const howto = req.body.howto;

    const sql = "insert into cookbook(title, category, ingred, howto) values(?, ?, ?, ?);";
    db.query(sql, [title, category, ingred, howto], (err, result) => {
        res.send("성공");
    })
})