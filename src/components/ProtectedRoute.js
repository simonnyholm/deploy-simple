import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../contexts/TokenProvider";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(TokenContext);

  return token ? children : <Navigate to="/login" />;
}
