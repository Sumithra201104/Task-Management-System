export default function Header({ onLogout }) {
  return (
    <div className="header">
      <h1>Task Manager</h1>
      {onLogout && (
        <button className="secondary" onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
