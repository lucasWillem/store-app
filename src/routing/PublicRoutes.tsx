import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RoutePaths } from "@/global";

interface PublicRoutesProps {
  isAuthenticated: boolean;
}

const PublicRoutes: FC<PublicRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to={RoutePaths.Store} /> : <Outlet />;
};

export { PublicRoutes };
