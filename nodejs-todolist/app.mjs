import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();

const server = http.createServer((req, res) => {
    res.write("Todolist API\n");

    if (req.method === "GET") {
        service.getTodolist(req, res);
    } else if (req.method === "POST") {
        service.postTodolist(req, res);
    } else if (req.method === "PUT") {
        service.putTodolist(req, res);
    } else if (req.method === "DELETE") {
        service.delTodolist(req, res);
    }

    
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
