import { useState } from "react";
import { addTask } from "../state/event";


const AddTaskForm = () => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      }
      addTask(newTask);
      setTaskText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTask} className="add-task-form">
        <input type="text" placeholder="Текст задачи" className="task-input"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="add-task-button">Добавить</button>

      </form>
    </div>
  )
}

export default AddTaskForm