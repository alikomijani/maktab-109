import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginUser } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import AuthTemplate from "./AuthTemplate";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const authState = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(loginUserThunk(data));
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (authState.isLogin) {
      navigate("/dashboard");
    }
  }, [authState.isLogin, navigate]);

  return (
    <AuthTemplate>
      <Paper className="w-full p-5">
        <Typography textAlign="center" variant="h4" gutterBottom>
          ورود
        </Typography>
        <form onSubmit={handleSubmit} className="w-full">
          <Stack gap={2}>
            <TextField
              name="email"
              onChange={handleInputChange}
              fullWidth
              label="ایمیل"
            />
            <TextField
              name="password"
              onChange={handleInputChange}
              fullWidth
              label="کلمه عبور"
            />
            <Button variant="contained" type="submit">
              ورود
            </Button>
          </Stack>
        </form>
      </Paper>
    </AuthTemplate>
  );
}

export default LoginForm;
