import { NavLink, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const userDataKey = "loggedInUserData";
  const userDataString = localStorage.getItem(userDataKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const { pathname } = useLocation();
  // remove logged in user details from local storage and redirect to login page
  const onLogout = () => {
    localStorage.removeItem(userDataKey);
    setTimeout(() => {
      location.replace(pathname);
    }, 1500);
  };
  return (
    <nav className="max-w-lg mx-auto mt-7 mb-20 bg-indigo-600 px-3 py-5 rounded-md">
      <ul className="flex items-center justify-between">
        <li className="text-white duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        {userData?.jwt ? (
          <div className="text-white flex gap-[1vw] items-center">
            <li className="text-white duration-200 ">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            {/* <p className="cursor-pointer">Logout</p> */}
            <Button children="Logout" size="default" onClick={onLogout} />
          </div>
        ) : (
          <p className="flex items-center space-x-3">
            <li className="text-white duration-200 font-semibold text-lg">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="text-white duration-200 font-semibold text-lg">
              <NavLink to="/login">Login</NavLink>
            </li>
          </p>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
