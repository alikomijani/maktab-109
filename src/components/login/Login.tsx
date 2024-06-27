import { useState } from "react";
import { login } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../hooks";
function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ token: "sample token", username }));
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
