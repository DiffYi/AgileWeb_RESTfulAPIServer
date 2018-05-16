const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "JZP", "JiaZhanPei");
    const todo2 = new Todo(++currentId, "HA", "Hu An");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    var strArray = [];
    for(var i = 0;i<this.todoList.length;i++)
    {
        strArray.push("id:"+this.todoList[i].id+" name:"+this.todoList[i].name+" description:"+this.todoList[i].description);
    }
    return strArray;
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    for(var i = 0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].id == id)
            return "id:"+this.todoList[i].id+" name:"+this.todoList[i].name+" description:"+this.todoList[i].description;
    }
    return "No This ID:" + id;
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    this.todoList.push(todoBody);
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    for(var i = 0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].id == id)
        {
            this.todoList.splice(i,1);
            this.todoList.push(update);
            return "Update ID:" + id;
        }          
    }
    return "No This ID:" + id;
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    for(var i = 0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].id == id)
        {
            this.todoList.splice(i,1);
            return "Delete ID:" + id;
        }          
    }
    return "No This ID:" + id;
  }
}

module.exports = new TodoListRepository();
