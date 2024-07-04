import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterFrom";
import { useAppSelector } from "../hooks";
import { useEffect } from "react";
import { isLoginSelector } from "../features/auth/authSelector";

function RegisterPage() {
  const isLogin = useAppSelector(isLoginSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin, navigate]);
  return <RegisterForm />;
}

export default RegisterPage;
