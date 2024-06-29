import { useEffect } from "react";
import Login from "../components/auth/LoginForm";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const authState = useAppSelector((state) => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isLogin) {
      navigate("/dashboard");
    }
  }, [authState.isLogin, navigate]);
  return <Login />;
}

export default LoginPage;
