import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function AuthTemplate({ children }: Props) {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(45deg, rgba(0,203,255,1) 100%, rgba(248,0,251,1) 100%)",
      }}
    >
      <div className="w-96 mx-auto  flex justify-center h-screen items-center">
        {children}
      </div>
    </Box>
  );
}

export default AuthTemplate;
