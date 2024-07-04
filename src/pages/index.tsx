import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { isLoginSelector } from "../features/auth/authSelector";

function HomeLandingPage() {
  const isLogin = useAppSelector(isLoginSelector);
  return (
    <div>
      <Navigate to={isLogin ? "/dashboard" : "/sign-in"} />
    </div>
  );
}

export default HomeLandingPage;
