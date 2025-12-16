import { useState } from "react";

export default function TaskCard({ task, onDelete, onUpdate }) {
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    onUpdate(task._id, { status });
  };

 return (
  <div className="task-card">
    <h3>{task.title}</h3>

    <select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option>Pending</option>
      <option>In Progress</option>
      <option>Completed</option>
    </select>

    <div className="task-actions">
      <button onClick={handleUpdate}>Update</button>
      <button className="danger" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  </div>
);

}
