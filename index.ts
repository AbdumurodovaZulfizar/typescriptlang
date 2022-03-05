import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/todos/3';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logger = (id: number, title: string, completed:boolean) => {
  console.log(`
  My id: ${id}
  My title: ${title}
  My completed: ${completed}
  `)
}
axios.get(url).then(reponse => {
  const todo = reponse.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logger(id, title, completed)
})