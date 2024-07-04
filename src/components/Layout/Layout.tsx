import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { isLoginSelector } from "../../features/auth/authSelector";
export const drawerWidth = 300;
function Layout() {
  const [open, setOpen] = useState(false);
  const isLogin = useAppSelector(isLoginSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/sign-in");
    }
  }, [navigate, isLogin]);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "background.default",
          ml: `${drawerWidth}px`,
          padding: 2,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Header handleToggleDrawer={() => setOpen((old) => !old)} />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Toolbar />
          <Divider />
          <MenuList>
            <MenuItem>داشبورد</MenuItem>
            <MenuItem>کاربران</MenuItem>
            <MenuItem>
              <Link to={"/dashboard/courses"}>دوره ها</Link>
            </MenuItem>
            <MenuItem>وظایف</MenuItem>
          </MenuList>
        </Drawer>
      </Box>

      <Footer />
    </Box>
  );
}

export default Layout;
