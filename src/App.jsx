import './App.css'

function ToDo() {
  return (
    <>
    <ul>
      <li>Faire les courses</li>
      <li>Mettre de l'essence</li>
      <li>Laver le linge</li>
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
    <ToDo />
    </>
  )
}


export default App
