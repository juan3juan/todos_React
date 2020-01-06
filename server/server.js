const express = require("express");
const bodyParser = require("body-parser"); //parse incoming request bodies, req.body
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); //middleware to anable access from initial request
const todoRoutes = express.Router();

let Todo = require("./todo.model");

app.use(cors());
app.use(bodyParser.json()); //choose querystring parsing the URL-encoded data
app.use("/todos", todoRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

todoRoutes.route("/").get(function(req, res) {
  // Todo.find(function(err, todos) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(todos);
  //   }
  // });
  Todo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
    });
});

todoRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
    res.json(todo);
  });
});

todoRoutes.route("/update/:id").post(function(req, res) {
  // Todo.findById(req.params.id, function(err, todo) {
  //   if (!todo) res.status(404).send("data is not found!");
  //   else todo.description = req.body.description;
  //   todo.responsible = req.body.responsible;
  //   todo.priority = req.body.priority;
  //   todo.completed = req.body.completed;

  //   todo
  //     .save()
  //     .then(todo => {
  //       res.json("Todo update!");
  //     })
  //     .catch(err => {
  //       res.status(400).send("Update not complete!");
  //     });
  // });
  Todo.findById(req.params.id)
    .then(todo => {
      todo.description = req.body.description;
      todo.responsible = req.body.responsible;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;
      todo
        .save()
        .then(todo => {
          res.json("Todo update!");
        })
        .catch(err => {
          res.status(400).send("Update not complete!");
        });
    })
    .catch(err => {
      res.status(404).send("data is not found!");
    });
});

todoRoutes.route("/add").post(function(req, res) {
  let todo = new Todo(req.body);
  console.log(todo);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new todo failed");
    });
});

app.get("/hello", (req, res) => {
  res.send("hello!");
});

app.listen(3010, () => {
  console.log("Server running on 3010");
});
