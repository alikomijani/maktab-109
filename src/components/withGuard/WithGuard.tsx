import { ReactNode } from "react";
import { useAppSelector } from "../../hooks";
import { hasPermissionSelector } from "../../features/auth/authSelector";

type Props = {
  children: ReactNode;
  permission: string;
};

function WithGuard({ children, permission }: Props) {
  const hasPermission = useAppSelector((state) =>
    hasPermissionSelector(state, permission)
  );
  if (hasPermission) {
    return <>{children}</>;
  } else {
    return null;
  }
}

export default WithGuard;
