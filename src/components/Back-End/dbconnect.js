const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true  }));
// app.use(bodyParser.json());

//Mysql Codes
const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6469862",
    password: "8bqf9CfmIL",
    database: "sql6469862"
})


//get method to get all data
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query("SELECT * FROM Todo", (err, rows) => {
            connection.release();

            !err ? res.send(rows) : console.log(err);
        })
    })
})




//get method to get data with an id
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query("SELECT * FROM Todo WHERE id = ?" , [req.params.id] , (err, rows) => {
            connection.release();

            !err ? res.send(rows) : console.log(err);
        })
    })
})

//post method to add data with
app.post('/post', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        let data = req.body.task;

        connection.query("INSERT INTO Todo (task) VALUES (?)" , [data] , (err, rows) => {
            connection.release();
            !err ? console.log(rows) : console.log(err);
        })
    })
})


//delete method to get data with an id
app.delete('/delete/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        let taskId = req.params.id;
        connection.query("DELETE FROM Todo WHERE id = ?" , taskId , (err, rows) => {
            connection.release();

            !err ? console.log(rows) : console.log(err);
        })
    })
})



//update method to get data with an id
app.put('/update', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        let updateId = req.body.updateId;
        let updateTask = req.body.task;
        connection.query("UPDATE Todo SET task = ? WHERE id = ?" , [updateTask,updateId] , (err, rows) => {
            connection.release();
            !err ? console.log(rows) : console.log(err);
        })
    })
})




//starting the server
app.listen(port, () => {
    console.log(`litening on ${port}`);
})