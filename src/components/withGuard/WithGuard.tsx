import { ReactNode } from "react";
import { useAppSelector } from "../../hooks";

type Props = {
  children: ReactNode;
  permission: string;
};

function WithGuard({ children, permission }: Props) {
  const userPermission = useAppSelector((state) => state.authSlice.permissions);
  const hasPermission = userPermission.find((item) => item === permission);
  if (hasPermission) {
    return <>{children}</>;
  } else {
    return null;
  }
}

export default WithGuard;
