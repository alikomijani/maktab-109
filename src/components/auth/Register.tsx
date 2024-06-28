import { useState } from "react";
import api from "../../api/config.api";
function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await api.post("register", data);
    console.log(res.data);
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
        </div>
        <div className="mt-2">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
