import React from "react";
import useAppStateContext from "../hooks/useAppStateContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { appState } = useAppStateContext();

  console.log(appState);
  return appState.isAuthenticated && appState.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
