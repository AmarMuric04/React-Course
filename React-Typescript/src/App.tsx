import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];

  const handleAddTodo = (newTodoText: string) =>
    todos.push(new Todo(newTodoText));

  return (
    <div>
      <NewTodo addTodo={handleAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
