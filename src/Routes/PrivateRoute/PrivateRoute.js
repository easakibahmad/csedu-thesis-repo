import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "sonner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    toast.error("Please sign in first!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
