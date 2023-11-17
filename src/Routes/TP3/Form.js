import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CTask from './CTask';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

export default function Form() {
  const [listTask, setListTask] = useState([
    { id: uuidv4(), descrip: 'Réviser React' },
    { id: uuidv4(), descrip: 'préparer présentation du Scrum Agile' },
    { id: uuidv4(), descrip: 'faire du sport' },
    { id: uuidv4(), descrip: 'Lire 15 pages par jour' },
  ]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null); // State to track which task is being edited

  const addTask = () => {
    setListTask([...listTask, { id: uuidv4(), descrip: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    const newList = listTask.filter((element) => element.id !== id);
    setListTask(newList);
  };

  const ref1 = useRef();

  const editTask = (id) => {
    setEditId(id); // Set the editId when clicking the "Edit" button
  };

  const saveTask = () => {
    const updatedList = listTask.map((element) => {
      if (element.id === editId) {
        return { ...element, descrip: ref1.current.value };
      }
      return element;
    });
    setListTask(updatedList);
    setEditId(null); // Clear editId after saving
  };

  return (
    <div className="container mt-4 light-mode">
      <h1 className="text-center m-5">My To-Do List</h1>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control m-3"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-dark m-2" type="button" onClick={addTask}>
              Add
            </button>
          </div>
        </div>

        <h2>Tasks of : {moment().format('LL')}</h2>
        <ul className="list-group">
          {listTask.map((el) => (
            <li key={el.id} className="list-group-item m-2 ">
              {el.id === editId ? (
                <div>
                  <input
                    type="text"
                    ref={ref1}
                    defaultValue={el.descrip}
                  />
                  <button onClick={saveTask}>Save</button>
                </div>
              ) : (
                <CTask
                  text={el.descrip}
                  deleteFunct={() => deleteTask(el.id)}
                  editFunct={() => editTask(el.id)} // Pass the edit function
                />
              )}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
