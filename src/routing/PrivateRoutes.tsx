import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

interface PrivateRoutesProps {
  isAuthenticated: boolean;
}

const PrivateRoutes: FC<PrivateRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export { PrivateRoutes };
