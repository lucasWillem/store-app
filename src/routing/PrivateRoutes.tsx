import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RoutePaths } from "./types";

interface PrivateRoutesProps {
  isAuthenticated: boolean;
}

const PrivateRoutes: FC<PrivateRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={RoutePaths.Unauthorized} />
  );
};

export { PrivateRoutes };
