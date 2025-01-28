import React, {useState} from "react";

const Todo = () => {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if(text){
      setTodos([...todos, {text, completed: false}])
      setText('')
    }
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a Todo here..." ></input>
      <button onClick={addTodo}>Add</button>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none'}} >
              {todo.text}
              <button onClick={() => removeTodo(index)}>Remove</button>
              <button onClick={() => toggleTodo(index)}>Toggle</button>
            </li>
          ))
        }
      </ul>
    </div>
    );
};

export default Todo;
