import { ChangeEvent, useState } from "react";
import api from "../../api/config.api";
import AuthTemplate from "./AuthTemplate";
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
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../features/auth/authSlice";
function RegisterFrom() {
  const [data, setData] = useState({
    email: "",
    password: "",
    last_name: "",
    first_name: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await api.post("register", data);
    dispatch(loginSuccess(res.data));
  };
  return (
    <AuthTemplate>
      <Paper className="w-full p-7">
        <div className="p-4">
          <Typography textAlign="center" variant="h4" gutterBottom>
            ساخت حساب کاربری
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
            <TextField
              name="first_name"
              onChange={handleInputChange}
              fullWidth
              label="نام"
            />
            <TextField
              name="last_name"
              onChange={handleInputChange}
              fullWidth
              label="نام خانوادگی"
            />
            <Button fullWidth variant="contained" type="submit">
              ثبت نام
            </Button>
            <Box mt={3}>
              <Typography variant="body1" textAlign={"center"}>
                ثبت نام با:
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
                حساب کاربری دارید؟
              </Typography>
              <Button fullWidth onClick={() => navigate("/sign-in")}>
                ورود به حساب کاربری
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </AuthTemplate>
  );
}

export default RegisterFrom;
