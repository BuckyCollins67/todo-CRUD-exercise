//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
// const todoTask = require("./models/todotask");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")
require('dotenv').config({path: './config/.env'})

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

// // GET METHOD
// app.get("/", async (req, res) => {
//     try {
//         TodoTask.find({}, (err, tasks) => {
//             res.render("index.ejs", { todoTasks: tasks });
//         });
//     } catch (err) {
//         if (err) return res.status(500).send(err);
//     }
// });

//POST METHOD
// app.post('/', async (req, res) => {
//     const todoTask = new TodoTask(
//         {
//             title: req.body.title,
//             content: req.body.content
//         });
//     try {
//         await todoTask.save();
//         console.log(todoTask)
//         res.redirect("/");
//     } catch (err) {
//         if (err) return res.status(500).send(err);
//         res.redirect("/");
//     }
// });




//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));