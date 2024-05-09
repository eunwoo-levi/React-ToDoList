import "./App.css";
import React from "react";
import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const deleteBtn = (e) => {
    setToDos((currentArray) =>
      currentArray.filter((item) => {
        return item !== e.target.id;
      })
    );
  };

  console.log(toDos);

  return (
    <div className="container">
      <h1 className="title">My To-Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to-do..."
        ></input>
        <button className="add-button">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li className="list-box" key={index}>
            {item}
            <button className="delete-button" id={item} onClick={deleteBtn}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
