import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterFrom";
import { useAppSelector } from "../hooks";
import { useEffect } from "react";

function RegisterPage() {
  const authState = useAppSelector((state) => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isLogin) {
      navigate("/dashboard");
    }
  }, [authState.isLogin, navigate]);
  return <RegisterForm />;
}

export default RegisterPage;
