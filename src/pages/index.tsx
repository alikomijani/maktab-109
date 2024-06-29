import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

function HomeLandingPage() {
  const isLogin = useAppSelector((state) => state.authSlice.isLogin);
  return (
    <div>
      <Navigate to={isLogin ? "/dashboard" : "/sign-in"} />
    </div>
  );
}

export default HomeLandingPage;
