import { useStorage } from "./useStorage";

export function useAuth() {
  const [auth, setAuth] = useStorage("auth", { isLogin: false, username: "" });
  const logout = () => {
    setAuth({
      isLogin: false,
      username: "",
    });
  };
  const login = (username: string) => {
    setAuth({
      isLogin: true,
      username,
    });
  };
  return {
    auth,
    login,
    logout,
  };
}
