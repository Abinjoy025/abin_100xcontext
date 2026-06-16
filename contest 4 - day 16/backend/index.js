const express = require("express");
const app = express();
const z = require("zod");

const todos = [];
let ids = 1;
app.use(express.json());

const todovalidation = z.object({
  task: z.string().min(1).max(30),
});

app.post("/todos", (req, res) => {
  const result = todovalidation.safeParse(req.body);
  if (!result.success) {
    res.status(401).json({
      success: false,
      message: "Failed to add todo",
    });
  } else {
    const todo = {};
    todo["id"] = ids;
    todo["task"] = result.data.task;
    todo["completed"] = false;
    todos.push(todo);
    ids = ids + 1;
    res.json({
      success: true,
      message: "Added todo",
    });
  }
});

app.get("/todos", (req, res) => {
  res.json({
    success: true,
    data: todos,
  });
});

app.put("/todos/:id", (req, res) => {
  const idq = req.params.id;
  todos.forEach((t) => {
    if (t.id === Number(idq)) {
      t["completed"] = true;
      res.status(200).json({
        success: true,
        message: "Done updating the todo as completed",
      });
    }
  });
//   res.status(401).json({
//     success: false,
//     message: "Can't find the todo id",
//   });
});

app.delete("/todos/:id", (req, res) => {
  const idq = req.params.id;
  todos.forEach((t) => {
    if (t.id === Number(idq)) {
      const i = todos.indexOf(t.id);
      todos.splice(i, 1);
      res.status(200).json({
        success: true,
        message: "Done deleting the todo",
      });
    }
  });
  res.status(401).json({
    success: false,
    message: "Can't find the todo",
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
