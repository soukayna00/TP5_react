import React, { useRef, useState } from 'react';
import './Task.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CTask(props) {
  const done = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`task-container dark-mode ${isChecked ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input m-2"
          name="done"
          ref={done}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">
          <input
            type="text"
            value={props.text}
            className={`form-control ${isChecked ? 'crossed' : ''}`}
            readOnly
          />
        </label>
        <button onClick={props.deleteFunct} className="btn btn-danger m-1">
          Delete
        </button>
        <button onClick={props.editFunct} className="btn btn-dark m-1">
          Edit
        </button>
      </div>
    </div>
  );
}
