import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { loginUser } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AuthTemplate from "./AuthTemplate";
function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(loginUserThunk(data));
    dispatch(loginUser(data));
  };

  return (
    <AuthTemplate>
      <Paper className="w-full p-7">
        <div className="p-4">
          <Typography textAlign="center" variant="h4" gutterBottom>
            ورود
          </Typography>
        </div>
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
            <Box>
              <Button>رمز خود را فراموش کردم.</Button>
            </Box>
            <Button fullWidth variant="contained" type="submit">
              ورود
            </Button>
            <Box mt={3}>
              <Typography variant="body1" textAlign={"center"}>
                ورود یا ثبت نام با:
              </Typography>
              <Stack direction={"row"} gap={2} justifyContent={"center"} mt={2}>
                <TwitterIcon className="hover:text-red-500 hover:cursor-pointer" />
                <GoogleIcon className="hover:text-red-500 hover:cursor-pointer" />
                <FacebookIcon className="hover:text-red-500 hover:cursor-pointer" />
              </Stack>
            </Box>
            <Box mt={5}>
              <Typography
                gutterBottom
                component={"div"}
                variant="caption"
                textAlign={"center"}
              >
                حساب کاربری ندارید؟
              </Typography>
              <Button fullWidth onClick={() => navigate("/sign-up")}>
                ساخت حساب کاربری
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </AuthTemplate>
  );
}

export default LoginForm;
