// client/src/components/TaskBoard.js
import React from 'react';
import '../App.css';

const TaskBoard = () => {
  return (
    <div className="taskboard-container">
      <div className="column">
        <h2>To Do</h2>
        {/* To Do tasks go here */}
      </div>
      <div className="column">
        <h2>In Progress</h2>
        {/* In Progress tasks go here */}
      </div>
      <div className="column">
        <h2>Done</h2>
        {/* Done tasks go here */}
      </div>
    </div>
  );
};

export default TaskBoard;
