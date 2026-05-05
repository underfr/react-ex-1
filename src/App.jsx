import './App.css'

const TODOS = [
  {
    id: 0,
    todo:'Faire la vaiselle',
    date:'20-01-2026',
    checked: true
  },
  {
    id: 1,
    todo:'Faire le ménage',
    date: '21-03-2026',
    checked: false
  },
  {
    id: 2,
    todo:"Mettre de l'essence",
    date:'30-03-2026',
    checked: true
  }
]

function ToDo({todo}) {
    if(todo.checked) {
      return (
        <li className='green'><input type='checkbox' defaultChecked/>{todo.todo} - {todo.date}</li> 
      )
    } 
    return (
      <li className='orange'>{todo.todo} - {todo.date}</li>
    )
}

function ToDoTernaire({todo}) {
  return (
    todo.checked
    ? <li className='green'><input type='checkbox' defaultChecked/>{todo.todo} - {todo.date}</li> 
    : <li className='orange'>{todo.todo} - {todo.date}</li> 
  )
}

function ToDoAnd({todo}){
  return <> 
    {todo.checked ? <li className='green'>{todo.todo} - {todo.date}</li> : <li className='orange'>{todo.todo} - {todo.date}</li>}
    {todo.checked && <input type='checkbox' defaultChecked/>} 
  </>
}

function App(){
  const DATE = new Date()
  return (
    <>
    <h1>Todo List</h1>
    <h2>{DATE.toLocaleString()}</h2>
    <ul>
      <h2>ToDo IF</h2>
      {TODOS.map((todo)=>
        <ToDo key={todo.id} todo={todo}/>
      )}
      <h2>ToDoTernaire</h2>
      {TODOS.map((todo)=>
        <ToDoTernaire key={todo.id} todo={todo}/>
      )}
      <h2>ToDoAnd</h2>
      {TODOS.map((todo)=>
        <ToDoAnd key={todo.id} todo={todo}/>
      )}
    </ul>
    </>
  )
}


export default App
