import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "../pages/Login"
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import ErrorHandler from "../components/errors/ErrorHandler";
const isLoggedIn = false
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/"
              data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/login"
              data={userData}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router