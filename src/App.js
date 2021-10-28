import react from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import './App.css';


function App() {
  const [todos, setTodos] = react.useState([
    {
      text: 'learn react',
      isCompleted: false,
      color : 'green'
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
      textDecorationLine: 'line-through'
    },
    {
      text: 'build todo app',
      isCompleted: false,
      textDecorationLine: 'line-through'
    }        
  ]);

  function TodoForm({addTodo}){
    const [value,setValue] = react.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Add Actions..."
          onChange={e => setValue(e.target.value)} />
      </form>
    )
}


  function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }      
    return <div className="todo" onClick={handle} > {todo.text} <FaTrashAlt /></div>
  }

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
    <div className="app">
      
      <TodoForm addTodo={addTodo} />
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
      </div>
      <div className="msg"></div>
    </div>
  );
}

export default App;
