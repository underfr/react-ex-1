import { useState } from "react";
import "./App.css";

const TODOS = [
  {
    id: 0,
    todo: "Faire la vaiselle",
    date: "20-01-2026",
    heure: 12,
    categorie: "Maison",
    checked: true,
  },
  {
    id: 1,
    todo: "Faire le ménage",
    date: "21-03-2026",
    heure: 6,
    categorie: "Maison",
    checked: false,
  },
  {
    id: 2,
    todo: "Mettre de l'essence",
    date: "30-03-2026",
    heure: 15,
    categorie: "Voiture",
    checked: true,
  },
];

function ToDo({ todo, heureRestante }) {
  const [heure, setHeure] = useState(heureRestante);

  function handleClickMinus() {
    heure > 0 ? setHeure(heure - 1) : setHeure(0);
  }

  function handleClickPlus() {
    setHeure(heure + 1);
  }

  if (todo.checked) {
    return (
      <li className="green">
        <input type="checkbox" defaultChecked />
        {todo.todo} - {todo.date}
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
        <p>{heure} H restant</p>
      </li>
    );
  }
  return (
    <li className="orange">
      {todo.todo} - {todo.date}
    </li>
  );
}

function Form({ onSubmit }) {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Todo" onChange={(e) => handleChange(e)} />
      <input type="text" placeholder="Date" onChange={(e) => handleChange(e)} />
      <input type="submit" value="Ajouter" />
    </form>
  );
}

function App() {
  const [maison, setMaison] = useState(true);
  const [voiture, setVoiture] = useState(true);

  const TODOLIST = TODOS.filter((el) => {
    if (el.categorie == "Maison" && !maison == true) {
      return false;
    }
    if (el.categorie == "Voiture" && !voiture == true) {
      return false;
    }
    return true;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const INPUTS = document.querySelectorAll('input[type="text"]');
    INPUTS.forEach((input) => {
      console.log(input.value);
    });
  }

  const DATE = new Date();
  return (
    <>
      <h1>Todo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <section>
        <input
          type="checkbox"
          checked={maison}
          onChange={() => setMaison(!maison)}
        />{" "}
        Maison
        <input
          type="checkbox"
          checked={voiture}
          onChange={() => setVoiture(!voiture)}
        />{" "}
        Voiture
      </section>
      <ul>
        <h2>ToDo IF</h2>
        {TODOLIST.map((todo) => (
          <ToDo key={todo.id} todo={todo} heureRestante={todo.heure} />
        ))}
      </ul>
      <Form onSubmit={(e) => handleSubmit(e)} />
    </>
  );
}

export default App;
