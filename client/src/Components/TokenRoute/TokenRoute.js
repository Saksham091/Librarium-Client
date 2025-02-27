import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export const TokenRoute = () => {
  const [tokenExpired, setTokenExpired] = useState(() =>
    isTokenExpired(sessionStorage.getItem("userId"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const expired = isTokenExpired(sessionStorage.getItem("userId"));
      setTokenExpired(expired);
        if (!expired) {
            const decodedToken = jwtDecode(sessionStorage.getItem("userId"));
            const currentTime = Date.now() / 1000;
            const timeLeft = decodedToken.exp - currentTime;
            if(timeLeft <= 300) {
                alert("Your session is about to expire in next 5 min. Please re-login to continue.");
            }
        }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return tokenExpired ? <Navigate to="/redirect" replace /> : <Outlet />;
};
