import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

interface PublicRoutesProps {
  isAuthenticated: boolean;
}

const PublicRoutes: FC<PublicRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/store" /> : <Outlet />;
};

export { PublicRoutes };
