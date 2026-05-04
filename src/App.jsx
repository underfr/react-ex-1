import './App.css'

function ToDo({todo, date}) {
  return (
    <>
    <ul>
      <li>{todo} - {date}</li>
    </ul>
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
      <ToDo todo={'Faire la vaiselle'} date={"20-01-2026"}/>
      <ToDo todo={'Faire le ménage'} date={"21-03-2026"}/>
      <ToDo todo={"Mettre de l'essence"} date={"30-03-2026"}/>
    </ul>
    </>
  )
}


export default App
