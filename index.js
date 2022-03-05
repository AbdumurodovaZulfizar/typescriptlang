"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/3';
var logger = function (id, title, completed) {
    console.log("\n  My id: ".concat(id, "\n  My title: ").concat(title, "\n  My completed: ").concat(completed, "\n  "));
};
axios_1["default"].get(url).then(function (reponse) {
    var todo = reponse.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logger(id, title, completed);
});
