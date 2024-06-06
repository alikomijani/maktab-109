import { Button, ButtonProps, CircularProgress } from "@mui/material";
type Props = {
  isLoading?: boolean;
} & ButtonProps;
function LoadingButton({ isLoading, ...props }: Props) {
  return (
    <Button variant="dashed" disabled={isLoading}>
      {isLoading ? (
        <>
          loading...
          <CircularProgress color="secondary" size={"14px"} />
        </>
      ) : (
        props.children
      )}
    </Button>
  );
}

export default LoadingButton;
