import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.warning("Please, Fill out!");
      return;
    }

    setLoading(true);
    const api = `https://fakestoreapi.com/auth/login`;

    const loginINFO = {
      username: username,
      password: password,
    };
    console.log(loginINFO);

    axios
      .post(api, loginINFO)
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully!");
        const token = localStorage.setItem("token", res.data.token);
        if (!token) {
          navigate("dashboard/products");
        } else {
          alert("error");
        }
      })
      .catch(() => {
        toast.error("Invalid username or password!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-4">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      <div className="bg-white w-full max-w-md rounded-2xl p-8 border border-gray-200 shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
              disabled={loading}
              className="w-full h-11 px-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              disabled={loading}
              className="w-full h-11 px-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 text-white font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-center"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
