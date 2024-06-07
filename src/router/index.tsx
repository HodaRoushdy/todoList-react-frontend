import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
const userDataKey = "loggedInUserData";
const userDataString = localStorage.getItem(userDataKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        {/* the route for home page (accessed only by authorized user )*/}
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* the route for profile page (accessed only by authorized user )*/}
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}>
              <h2>profile</h2>
            </ProtectedRoute>
          }
        />
        {/* the route for login page */}
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!userData?.jwt}
              redirectPath="/"
              data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        {/* the route for register page */}
        <Route
          path="register"
          element={
            <ProtectedRoute
              isAllowed={!userData?.jwt}
              redirectPath="/login"
              data={userData}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
      </Route>
      {/* 404 page route */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
