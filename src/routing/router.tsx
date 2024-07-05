import { FC, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useCheckIfLoggedIn } from "@/global";
import { Loader } from "@/components/atoms/Loader";
import { RoutePaths } from "./types";

const StorePage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.StorePage })),
);

const UnauthorizedPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.UnauthorizedPage })),
);

const SignUpPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.SignUpPage })),
);

const LoginPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.LoginPage })),
);

interface RouterProps {
  children?: React.ReactNode;
}

const Router: FC<RouterProps> = ({ children }) => {
  const isLoggedIn = useCheckIfLoggedIn();

  return (
    <BrowserRouter>
      {children}
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isLoggedIn} />}>
            <Route path={RoutePaths.Store} element={<StorePage />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticated={isLoggedIn} />}>
            <Route path={RoutePaths.Login} element={<LoginPage />} />
            <Route path={RoutePaths.SignUp} element={<SignUpPage />} />
            <Route
              path="/*"
              element={<Navigate to={RoutePaths.Login} replace />}
            />
          </Route>
          <Route
            path={RoutePaths.Unauthorized}
            element={<UnauthorizedPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
