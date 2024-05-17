import { ReactNode, createContext } from "react";
import Login from "../components/login/Login";
import { useAuth } from "../hooks/useAuth";

type Props = {
  children?: ReactNode;
};

export const AuthContext = createContext({
  isLogin: false,
  username: "",
  logout: () => {},
  login: (username: string) => {},
});

function AuthContextProvider({ children }: Props) {
  const { auth, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLogin: auth.isLogin,
        username: auth.username,
        logout,
        login,
      }}
    >
      {auth.isLogin ? children : <Login />}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
