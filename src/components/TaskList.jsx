import React from 'react';
import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";
import { toggleTask } from "../state/event";


const TaskList = () => {

  const tasks = useUnit(tasksStore);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}
          className={`task-item ${task.completed
            ? 'completed'
            : ''}`}>
            {task.text}
          <button onClick={() => toggleTask(task.id)} className="toggle-task-button">{task.completed
            ? 'Выполнена'
            : 'Не выпонена'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;