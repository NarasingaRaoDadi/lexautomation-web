import { Navigate } from "react-router-dom";
import { STORAGE_KEY } from "../../utils/access";

export default function ProtectedRoute({ children }) {

    const hasAccess =
        localStorage.getItem(STORAGE_KEY) === "true" ||
        sessionStorage.getItem(STORAGE_KEY) === "true";

    if (!hasAccess) {
        return <Navigate to="/space" replace />;
    }

    return children;
}