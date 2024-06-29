import React, { FC, ReactNode, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

interface RouterProps {
  NavBar: ReactNode;
}

const StorePage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.StorePage })),
);

const UnauthorizedPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.UnauthorizedPage })),
);

const LoginPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.LoginPage })),
);

export const Router: FC<RouterProps> = ({ NavBar }) => {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      {NavBar}
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/store" element={<StorePage />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </Route>
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
