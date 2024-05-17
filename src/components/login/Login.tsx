import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username);
  };
  return (
    <div className="w-96 mx-auto  flex justify-center h-screen items-center">
      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <label className="block">
            <span>نام کاربری:</span>
            <input
              className="block border p-1 w-full"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-2">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
