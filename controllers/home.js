// Importing the model, notice the capitalization
const TodoTask = require('../models/TodoTask');

module.exports = {
    getIndex: async (req, res) => {
        try {
            const tasks = await TodoTask.find();
            res.render("index.ejs", { todoTasks: tasks });
        } catch (err) {
            console.log(err);
            if (err) return res.status(500).send(err);
        }
    },
    createTask: async (req, res) => {
        // Creating a new instance, different variable name
        const newTodoTask = new TodoTask({
            title: req.body.title,
            content: req.body.content
        });
        try {
            await newTodoTask.save();
            console.log(newTodoTask);
            res.redirect("/");
        } catch (err) {
            console.log(err);
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
};

// const todoTask = require ('../models/todotask')

// module.exports = {
//     getIndex : async (req, res) => {
//         try {
//             const tasks = await
//             todoTask.find()
//             res.render("index.ejs", { todoTasks: tasks });
//         }catch (err) {
//             console.log(err)
//             if (err) return res.status(500).send(err);
//         }
//     },
//     createTask : async (req, res) => {
//         const todotask = new TodoTask(
//             {
//                 title: req.body.title,
//                 content: req.body.content
//             });
//         try {
//             await todoTask.save();
//             console.log(todoTask)
//             res.redirect("/");
//         } catch (err) {
//             if (err) return res.status(500).send(err);
//             res.redirect("/");
//         }
//     }
// }



