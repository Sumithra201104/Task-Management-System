import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/login", { email, password });
      window.location.href = "/dashboard";
    } catch {
      alert("Login failed");
    }
  };

  return (
  <div className="container">
    <h2>Login</h2>

    <form onSubmit={handleLogin}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>

    <p>
      Don’t have an account? <Link to="/register">Register</Link>
    </p>
  </div>
);

}
