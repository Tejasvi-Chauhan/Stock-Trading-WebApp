import api from "../api/api";

const LogoutButton = () => {
  const handleLogout = async () => {
    await api.post("/logout");
    window.location.href = "http://localhost:5173/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
