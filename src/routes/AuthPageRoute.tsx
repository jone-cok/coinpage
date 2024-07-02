import path from "@/constants/path";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
}) => {
  const token = localStorage.getItem("token");

  if (token != undefined) {
    // Redirect to login if the user is not authenticated
    return <Navigate to={path.Profile} />;
  }

  // Render the protected component
  return <Component />;
};

export default ProtectedRoute;
