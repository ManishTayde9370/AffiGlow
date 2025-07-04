import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

// Component Imports
import Login from "./components/Login";
import Home from "./components/Home";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Register from "./components/Register";
import UserLayout from "./layout/UserLayout";
import ManageUsers from "./pages/users/ManageUsers";
import ProtectedRoute from "./rbac/ProtectedRoute";
import UnauthorizedAccess from "./components/UnauthorizedAccess";
import ManagePayments from "./payments/ManagePayments";
import Error from "./pages/Error"; // ✅ Error Page Import

function App() {
  const userDetails = useSelector((state) => state.userDetails);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const isUserLoggedIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/is-user-logged-in",
        {},
        { withCredentials: true }
      );
      dispatch({
        type: "SET_USER",
        payload: response.data.userDetails,
      });
    } catch (error) {
      console.error("User not logged in:", error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Home or Redirect to Dashboard */}
      <Route
        path="/"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <AppLayout>
              <Home />
            </AppLayout>
          )
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <AppLayout>
              <Login />
            </AppLayout>
          )
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          userDetails ? (
            <UserLayout>
              <Dashboard />
            </UserLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Manage Users - Admin Only */}
      <Route
        path="/users"
        element={
          userDetails ? (
            <ProtectedRoute roles={["admin"]}>
              <UserLayout>
                <ManageUsers />
              </UserLayout>
            </ProtectedRoute>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Unauthorized Access */}
      <Route
        path="/unauthorized-access"
        element={
          userDetails ? (
            <UserLayout>
              <UnauthorizedAccess />
            </UserLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Logout */}
      <Route
        path="/logout"
        element={userDetails ? <Logout /> : <Navigate to="/login" />}
      />

      {/* Error */}
      <Route
        path="/error"
        element={
          userDetails ? (
            <UserLayout>
              <Error />
            </UserLayout>
          ) : (
            <AppLayout>
              <Error />
            </AppLayout>
          )
        }
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          <AppLayout>
            <Register />
          </AppLayout>
        }
      />

      {/* Manage Payments */}
      <Route
        path="/manage-payments"
        element={
          userDetails ? (
            <UserLayout>
              <ManagePayments />
            </UserLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Fallback for unknown routes */}
      <Route
        path="*"
        element={
          <AppLayout>
            <Error />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default App;
