import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginUserThunk } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const authState = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserThunk(data));
    // dispatch(loginUser(data));
  };
  useEffect(() => {
    if (authState.isLogin) {
      navigate("/dashboard");
    }
  }, [authState.isLogin, navigate]);

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
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span> کلمه عبور:</span>
            <input
              className="block border p-1 w-full"
              type="text"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </label>
          {authState.error ? (
            <span className="text-red-400">{authState.error}</span>
          ) : null}
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
