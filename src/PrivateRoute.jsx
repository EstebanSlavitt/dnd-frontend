import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("jwt");

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the child components
  return children;
}
