import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";

const ThemedSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  color: theme.palette.success.main,
  "&.Mui-disabled   ": {
    color: "red",
  },
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

function MacDonaldSlider({ sx, ...props }: SliderProps) {
  return (
    <Slider
      {...props}
      sx={{
        color: (theme) => theme.palette.success.main,
        "&.Mui-disabled": {
          color: "red",
        },
        "& .MuiSlider-thumb": {
          "&:hover, &.Mui-focusVisible": {
            boxShadow: (theme) =>
              `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
          },
          "&.Mui-active": {
            boxShadow: (theme) =>
              `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
          },
        },
        ...sx,
      }}
    />
  );
}

export default MacDonaldSlider;
