import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos : Array<Todo> = [
  {text:"Finish The Tutorial", complete:false},
  {text:"Start The Tutorial", complete:true}
];


const App: React.FC = () => {
  const [todos,setTodos] = useState(initialTodos);  

  const toggleTodo: ToggleTodo = selectedTodo =>{

    const newTodos = todos.map(todo =>{
      if(todo === selectedTodo){
        return {
          ...todo,
          complete : !todo.complete
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const addTodo:AddTodo = newTodo =>{
    newTodo.trim() !== "" &&
      setTodos([...todos,{ text:newTodo, complete:false }]);
  }
  
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
    </React.Fragment>
    
  );
}

export default App;
