import { useEffect, useState } from "react";
import api from "../services/api";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Load tasks
  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  // Auth check + role check
  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data);
        loadTasks();

        // Admin: load all users
        if (res.data.role === "admin") {
          api.get("/admin/users").then((u) => setUsers(u.data));
        }
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, []);

  // Logout
  const logout = async () => {
    await api.post("/auth/logout");
    window.location.href = "/";
  };

  // Create task
  const createTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  // Update task (status)
  const updateTask = async (id, data) => {
    await api.put(`/tasks/${id}`, data);
    loadTasks();
  };

  return (
    <>
      {/* Top Header */}
      <Header onLogout={logout} />

      {/* Main Content */}
      <div className="container">
        <h2>Dashboard</h2>

        {/* Create Task */}
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="New Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={createTask}>Add Task</button>
        </div>

        {/* Task List */}
        {tasks.length === 0 && <p>No tasks available</p>}

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}

        {/* Admin Section */}
        {user?.role === "admin" && (
          <div className="admin-section">
            <h3>All Users (Admin)</h3>

            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              <ul>
                {users.map((u) => (
                  <li key={u._id}>
                    <strong>{u.name}</strong> — {u.email} ({u.role})
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}
