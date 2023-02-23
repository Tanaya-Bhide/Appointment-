import React from "react";
import { Navigate } from "react-router";
function ProtectedRoute(props) {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default ProtectedRoute;
