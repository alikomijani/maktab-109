import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { loginUserThunk } from "../../api/auth.api";
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserThunk(data));
    // dispatch(startLogin());
    // try {
    //   const response = await api.post("auth/login", data);
    //   const { role, token, username, refreshToken } = response.data;
    //   dispatch(loginSuccess({ refreshToken, role, token, username }));
    // } catch (e) {
    //   dispatch(loginFailed({ error: "invalid username or password" }));
    // }
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
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
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
