import { useEffect } from "react";
import Login from "../components/auth/LoginForm";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import { isLoginSelector } from "../features/auth/authSelector";

function LoginPage() {
  const isLogin = useAppSelector(isLoginSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin, navigate]);
  return <Login />;
}

export default LoginPage;
