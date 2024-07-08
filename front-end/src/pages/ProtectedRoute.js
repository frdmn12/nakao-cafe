import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { URL_API } from "../api/data";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const [isValid, setIsValid] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`${URL_API}/users/protected`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      validateToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
