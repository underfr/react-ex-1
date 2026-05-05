import './App.css'

const TODOS = [
  {
    id: 0,
    todo:'Faire la vaiselle',
    date:'20-01-2026'
  },
  {
    id: 1,
    todo:'Faire le ménage',
    date: '21-03-2026'
  },
  {
    id: 2,
    todo:"Mettre de l'essence",
    date:'30-03-2026'
  }
]

function ToDo({todo, date}) {
  return (
    <>
      <li>{todo} - {date}</li>
    </>
  )
}

function App(){
  const DATE = new Date()
  return (
    <>
    <h1>Todo List</h1>
    <h2>{DATE.toLocaleString()}</h2>
    <ul>
      {TODOS.map((todo)=>
        <ToDo key={todo.id} todo={todo.todo} date={todo.date}/>
      )}
    </ul>
    </>
  )
}


export default App
