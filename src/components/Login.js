import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [{ username, password, error }, setLogin] = useState({
    username: "",
    password: "",
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin((prev) => ({ username: "", password: "" }));
    return username === "ezekiel" && password === "pass"
      ? navigate("/colors")
      : setLogin((prev) => ({ ...prev, error: true }));
  };

  return (
    <div className="form-container">
      <form action="#" className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error ? <p>username or passwor is incorrect</p> : ""}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) =>
            setLogin((prev) => ({ ...prev, username: e.target.value }))
          }
          onFocus={() => setLogin((prev) => ({ ...prev, error: false }))}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) =>
            setLogin((prev) => ({ ...prev, password: e.target.value }))
          }
          onFocus={() => setLogin((prev) => ({ ...prev, error: false }))}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
